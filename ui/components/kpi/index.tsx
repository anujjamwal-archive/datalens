import * as React from "react";
import { IKPI } from "../../lib/core/report";
import { IDataProvider } from "../../lib/core/reportdata";

interface IProps {
  spec: IKPI;
  loadStatusProvider: IDataProvider<any>;
  dataProvider: IDataProvider<any>;
}

interface IState {
  data: any;
}

export default class KPI extends React.Component<IProps, IState> {
  public componentWillMount() {
    this.props.dataProvider.onChange((provider) => this.setState({data: provider.output()}));
  }

  public render() {
    return (
      <g style={this.generateStyle()}>
        <text x="0" y="0">{this.isLoading() ? "Loading" : this.state.data}</text>
      </g>
    );
  }

  private isLoading() {
    return this.props.loadStatusProvider.lastUpdated() >= this.props.dataProvider.lastUpdated();
  }

  private generateStyle() {
    return {
      ...this.props.spec.display,
    };
  }
}
