import * as React from "react";
import { IPage } from "../../lib/core/report";
import { Dag } from "../../lib/core/dag";

interface IProps {
  spec: IPage;
}

interface IState {
  status: Status;
  dag: Dag;
}

type Status = "Loading" | "Ready";

export default class Page extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {status: "Loading", dag: new Dag(this.props.spec.id)};
  }

  public componentWillMount() {
    
  }

  public render() {
    return (
      <div></div>
    );
  }
}
