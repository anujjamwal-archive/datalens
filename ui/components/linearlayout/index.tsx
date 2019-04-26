import * as React from "react";
import { ILinearLayout } from "../../lib/core/report";

interface IProps {
  spec: ILinearLayout;
  children: React.ReactNodeArray;
}

export default class LinearLayout extends React.PureComponent<IProps> {
  public render() {
    return (
      <div style={this.generateStyle()}>
        {this.props.children}
      </div>
    );
  }

  private generateStyle() {
    return {
      marginTop: this.props.spec.marginTop,
      marginLeft: this.props.spec.marginLeft,
      marginRight: this.props.spec.marginRight,
      marginBottom: this.props.spec.marginBottom,
      paddingTop: this.props.spec.paddingTop,
      paddingLeft: this.props.spec.paddingLeft,
      paddingRight: this.props.spec.paddingRight,
      paddingBottom: this.props.spec.paddingBottom,
    };
  }
}
