import * as React from "react";
import { IHeader } from "../../lib/core/report";

interface IProps {
  spec: IHeader;
}

export default class Header extends React.PureComponent<IProps> {
  public render() {
    return (
      <header>
        <h1>{this.props.spec.heading}</h1>
      </header>
    );
  }
}
