import * as React from "react";
import { IReport } from "../../lib/core/report";

interface IProps {
  report: IReport;
}

interface IState {
  currentPage: number;
}

export default class Dashboard extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);

    this.state = {currentPage: 0};
  }

  public render() {
    return (
      <div className="dasboard">
        <div className="dashboard-header">

        </div>
        <div className="page current">

        </div>
      </div>
    );
  }
}
