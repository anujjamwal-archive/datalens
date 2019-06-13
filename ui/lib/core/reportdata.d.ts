type StateListener<S> = (state: S) => void
type ChangeHandler<T> = (provider: IDataProvider<T>) => void;

interface IDataProvider<T> {
  lastUpdated: () => number;
  output: () => T;
  onChange: (arg0: ChangeHandler<T>) => void;
}

type CompoundFilterType = "and" | "or";
type FilterType = "terms";

type IFilter = {
  type: FilterType
  field: string
  values: any[],
} | {
  type: CompoundFilterType
  filters: IFilter[],
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

export interface IFetchRequest {
  url: RequestInfo;
  request?: RequestInit;
}
