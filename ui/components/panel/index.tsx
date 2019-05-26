import * as React from "react";
import { IPanel } from "../../lib/core/report";

interface IProps {
  spec: IPanel;
  children?: React.ReactChild | React.ReactChild[];
}

const generateStyle = (props: IProps): React.CSSProperties => ({
  display: 'inline-block',
  overflow: 'hidden',
  height: props.spec.display.height,
  width: props.spec.display.width,
  marginTop: props.spec.display.marginTop,
  marginLeft: props.spec.display.marginLeft,
  marginRight: props.spec.display.marginRight,
  marginBottom: props.spec.display.marginBottom,
  paddingTop: props.spec.display.paddingTop,
  paddingLeft: props.spec.display.paddingLeft,
  paddingRight: props.spec.display.paddingRight,
  paddingBottom: props.spec.display.paddingBottom,
  borderRadius: props.spec.display.cornerRadius || "5px",
  backgroundColor: props.spec.display.backgroundColor || "white",
  boxShadow: "0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)"
});

const Panel = (props: IProps) => (
  <div style={generateStyle(props)}>{props.children}</div>
);

export default Panel;
