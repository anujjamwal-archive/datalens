import * as React from "react";
import { IKPI } from "../../lib/core/report";
import { IDataProvider } from "../../lib/core/reportdata";
import Loader from "../loader";

interface IProps {
  spec: IKPI;
  loadStatusProvider: IDataProvider<any>;
  dataProvider: IDataProvider<any>;
}

interface IState {
  nextVsn: number;
  currentVsn: number;
  data: any;
}

export default class KPI extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);

    this.state = { data: null, currentVsn: 0, nextVsn: 1 };
  }

  public componentWillMount() {
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
    return this.isLoading() ? (
      <Loader />
    ) : (
      <g style={this.generateStyle()}>
        <text x="0" y="0">
          {this.state.data}
        </text>
      </g>
    );
  }

  private isLoading() {
    return this.state.nextVsn > this.state.currentVsn;
  }

  private generateStyle(): React.CSSProperties {
    const {display} = this.props.spec;
    const fontSize = display.height - (display.paddingTop || 0) - (display.paddingBottom || 0);
    
    return {
      ...display,
      height: display.height - (display.paddingTop || 0) - (display.paddingBottom || 0),
      width: display.width - (display.paddingLeft || 0) - (display.paddingRight || 0),
      fontSize: `${fontSize}px`,
      display: 'inline-block',
      overflow: 'hidden'
    };
  }
}
