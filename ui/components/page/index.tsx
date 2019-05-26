import * as React from "react";
import { IPage } from "../../lib/core/report";
import { Dag } from "../../lib/core/dag";
import { PageBuilder } from "../../lib/core/reportbuilder";

const style: Record<string, React.CSSProperties> = {
  root: {
    display: 'flex',
    backgroundColor: '#e2e1e0',
    opacity: 0.26,
    height: '100%'
  }
}

interface IProps {
  spec: IPage;
}

interface IState {
  dag: Dag;
  page: React.ReactNode;
}

type Status = "Loading" | "Ready";

export default class Page extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);

    const dag = new Dag(this.props.spec.id);
    const page = new PageBuilder(dag).build(this.props.spec.component);
    this.state = {dag, page};
  }

  public render() {
    return (
      <div style={style.root}>
        {this.state.page}
      </div>
    );
  }
}
