type DataProviderState = "WAITING" | "READY";

interface IObserver<T> {
  onChange: (provider: IDataProvider<T>) => void;
}

interface IDataProvider<T> {
  state: DataProviderState;
  lastUpdated: () => number;
  output: () => T;
  subscribe: (observer: IObserver<T>) => void;
  unsubscribe: (observer: IObserver<T>) => void;
}
