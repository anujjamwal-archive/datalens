import * as React from "react";
import Header from "../../components/header";
import Page from "../../components/page";
import { IDashboard } from "../../lib/core/report";
import Loader from "../../components/loader";

const style: Record<string, React.CSSProperties> = {
  root: {
    height: '100%'
  }
}

interface IProps {
  spec: IDashboard;
}

type Status = "LOADING" | "READY";

interface IState {
  currentPage: number;
  pages: React.ReactNode[];
  status: Status
}

export default class Dashboard extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);

    const pages = this.props.spec.pages.map(p => <Page spec={p} />)
    const status = "READY";

    this.state = {currentPage: 0, pages, status};
  }

  public render() {
    return (
      <div className="dashboard" style={style.root}>
        <Header spec={this.props.spec.header}></Header>
        {this.state.pages[this.state.currentPage]}
      </div>
    );
  }
}
