import * as React from "react";
import { IKPI } from "../../lib/core/report";

interface IProps {
  spec: IKPI;
  dataProvider: IDataProvider<any>;
}

export default class KPI extends React.Component<IProps> implements IObserver<any> {
  public onChange(provider: IDataProvider<any>) {
    this.forceUpdate();
  }

  public componentWillMount() {
    this.props.dataProvider.subscribe(this);
  }

  public componentWillUnmount() {
    this.props.dataProvider.unsubscribe(this);
  }

  public render() {
    return (
      <g style={this.generateStyle()}>
        <text x="0" y="0">{this.props.dataProvider.output()}</text>
      </g>
    );
  }

  private generateStyle() {
    return {
      ...this.props.spec.display,
    };
  }
}
