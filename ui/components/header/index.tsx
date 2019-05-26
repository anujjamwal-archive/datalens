import * as React from "react";
import { IHeader } from "../../lib/core/report";
import Typography from "../material/typography";
import AppBar from "../material/appbar";
import Icon from "../material/icon";
import Toolbar from "../material/toolbar";

const style: Record<string, React.CSSProperties> = {
  root: {
    flex: 1
  }
};

interface IProps {
  spec: IHeader;
}

export default class Header extends React.PureComponent<IProps> {
  public render() {
    return (
      <AppBar>
        <Toolbar>
          <Icon icon="menu" status="active" size="md-24"/>
          <Typography variant="h6">{this.props.spec.heading}</Typography>
        </Toolbar>
        <Toolbar>
          <Icon icon="account_circle" status="active-unfocused" size="md-24"/>
        </Toolbar>
      </AppBar>
    );
  }
}
