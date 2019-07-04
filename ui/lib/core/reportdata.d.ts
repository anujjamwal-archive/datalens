type CompoundFilterType = "and" | "or";
type FilterType = "terms";

type IFilter =
  | {
      type: FilterType;
      field: string;
      values: any[];
    }
  | {
      type: CompoundFilterType;
      filters: IFilter[];
    };

interface IQuery {
  metrics: IMetric[];
  filters?: IFilter;
  order?: string[];
}

interface IMetric {
  aggregationFn: string;
  field: string;
  alias: string;
}

export interface IResponse {
  data: Array<{ metrics: Record<string, any> }>;
}

export interface IFetchRequest {
  url: RequestInfo;
  request?: RequestInit;
}
