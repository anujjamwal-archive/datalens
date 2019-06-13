import * as React from "react";
import { IKPI } from "../../lib/core/report";
import { IDataProvider } from "../../lib/core/reportdata";
import Loader from "../loader";

interface IProps {
  spec: IKPI;
  loadStatusProvider: IDataProvider<any>;
  dataProvider: IDataProvider<any>;
  onRefresh: () => void;
}

interface IState {
  nextVsn: number;
  currentVsn: number;
  data: any;
}

export default class KPI extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);

    setTimeout(() => this.props.onRefresh(), 1);
    this.state = { data: null, currentVsn: 0, nextVsn: 1 };
    
    this.props.loadStatusProvider.onChange(provider => 
      this.setState({ nextVsn: provider.lastUpdated() })
    );

    this.props.dataProvider.onChange(provider =>
      this.setState({
        data: provider.output(),
        currentVsn: provider.lastUpdated()
      })
    );
  }

  public render() {
    return <svg viewBox="0 0 56 18">
      {this.isLoading() ?
        <Loader x={23} y={4} height={10} width={10} /> :
        <text x="50%" y="15" textAnchor="middle">{this.state.data}</text>}
      </svg>
  }

  private isLoading() {
    return this.state.nextVsn > this.state.currentVsn;
  }
}
