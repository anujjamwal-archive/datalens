import * as React from "react";
import Header from "../../components/header";
import Page from "../../components/page";
import { IDashboard } from "../../lib/core/report";

interface IProps {
  spec: IDashboard;
}

type Status = "LOADING" | "READY";

interface IState {
  currentPage: number;
  pages: Page[];
  status: Status
}

export default class Dashboard extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);

    this.state = {currentPage: 0, pages: [], status: "LOADING"};
  }

  public componentDidMount() {
    // build pages and store to state
  }

  public render() {
    return (
      <div className="dasboard">
        <Header spec={this.props.spec.header}></Header>
        {this.state.pages[this.state.currentPage]}
      </div>
    );
  }
}
