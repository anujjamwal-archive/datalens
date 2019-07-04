import * as React from "react";
import { IPage } from "../../lib/core/report";
import { PageBuilder } from "../../lib/core/reportbuilder";

const style: Record<string, React.CSSProperties> = {
  root: {
    display: "flex",
    backgroundColor: "#e2e1e0",
    opacity: 0.26,
    height: "100%"
  }
};

interface IProps {
  spec: IPage;
}

interface IState {
  page: React.ReactNode;
}

export default class Page extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);

    const page = new PageBuilder().build(this.props.spec);
    this.state = { page };
  }

  public render() {
    return <div style={style.root}>{this.state.page}</div>;
  }
}
