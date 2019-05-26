import { IQuery, IFilter, IFetchRequest, ChangeHandler, IDataProvider } from "./reportdata";

export abstract class DagNode {
  private _id: string;
  private _output?: any;
  protected predecessors: DagNode[];
  protected successors: DagNode[];
  private _lastProcessed: number;
  private _handers: ChangeHandler<any>[];

  constructor(id: string) {
    this._id = id;
    this.predecessors = [];
    this.successors = [];
    this._lastProcessed = 0;
    this._handers = [];
  }
  
  public async abstract process(): Promise<any>;

  id() {
    return this._id;
  }

  output() {
    return this._output;
  }

  protected setOutput(val: any) {
    this._output = val;
    this._handers.forEach(h => h(this))
  }

  async processAndTriggerSuccessors() {
    await this.process();
    this._lastProcessed = new Date().getTime();
    for (const node of this.successors) {
      await node.processAndTriggerSuccessors();
    }

    return Promise.resolve(true);
  }

  public addSuccessor(node: DagNode) {
    this.successors.push(node);
    this.predecessors.push(this);
  }

  public lastUpdated() {
    return this._lastProcessed;
  }

  public onChange(handler: ChangeHandler<any>) {
    this._handers.push(handler);
  }
}

export class Dag {
  private _id: string;
  private nodes: Map<string, DagNode>;

  constructor(id: string) {
    this._id = id;
    this.nodes = new Map();
  }

  variable(id: string) {
    return new VariableNode(id);
  }

  func(id: string, fn: (input: any) => any) {
    return new FunctionNode(id, fn);
  }

  query(id: string, datasetId: string, query: IQuery) {
    return new QueryNode(id, datasetId, query);
  }

  identity(id: string) {
    return new IdentityNode(id);
  }
}

class VariableNode extends DagNode {
  constructor(id: string) {
    super(id);
  }

  async assign(value: any) {
    this.setOutput(value);
    await this.processAndTriggerSuccessors();
  }

  public async process() {
    return Promise.resolve(true);
  }
}

class FunctionNode extends DagNode {
  private fn: (input: any) => any;

  constructor(id: string, fn: (input: any) => any) {
      super(id);
      this.fn = fn;
  }

  public async process() {
      const output = this.predecessors.map(p => this.fn(p.output()));

      if (output.length == 1) {
        this.setOutput(output[0]);
      } else {
        this.setOutput(output);
      }

      this.processAndTriggerSuccessors();
      return Promise.resolve(true);
  }
}

class IdentityNode extends FunctionNode {
  constructor(id: string) {
    super(id, (ob) => ob);
  }
}

class QueryNode extends DagNode {
  private datasetId: string;
  private query: IQuery;

  constructor(id: string, datasetId: string, query: IQuery) {
      super(id);
      this.datasetId = datasetId;
      this.query = query;
  }

  public async process() {
      const filters = this.predecessors
          .filter((n) => n.constructor.name === VariableNode.name)
          .filter((v) => v.output() !== undefined)
          .reduce((q: IFilter[], v) => q.concat({field: v.id(), type: "terms", values: v.output()}), []);

      const q = filters.length === 0 ? this.query : {...this.query, filters: this.prepareFilter(this.query.filters, filters)};

      const req = buildRequest(this.datasetId, q);

      const response = await fetch(req.url, req.request)
          .then((res) => res.json())
          .then((res) => {
              this.setOutput(res);
              return res;
          });

      return response;
  }

  private prepareFilter(f: IFilter | undefined, filters: IFilter[]): IFilter {
      if (!f) {
          return {type: "and", filters};
      }

      if (f.type === "and") {
          f.filters = filters.concat(f.filters);
      } else {
          f = {type: "and", filters: filters.concat([f])};
      }

      return f;
  }
}

function buildRequest(id: string, query: IQuery): IFetchRequest {
  return {
    url: "http://www.mocky.io/v2/" + id,
    request: {
      method: "POST",
      mode: "cors",
      body: JSON.stringify(query),
      headers: {
        "Content-Type": "application/json",
      },
    },
  };
}
