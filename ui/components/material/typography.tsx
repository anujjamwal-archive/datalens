import * as React from "react";
import { Color } from "csstype";

type Variant =
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "h5"
  | "h6"
  | "subtitle1"
  | "subtitle2"
  | "body1"
  | "body2"
  | "button"
  | "caption"
  | "overline";

type Weight = 
  | "Thin"
  | "Light"
  | "Regular"
  | "Medium";

const fontWeightLookup: any = {
  Thin: 100,
  Light: 300,
  Regular: 400,
  Medium: 500
};

const variantProperties = {
  h1: {
    size: 96,
    font: "Light"
  },
  h2: {
    size: 60,
    font: "Light"
  },
  h3: {
    size: 48,
    font: "Regular"
  },
  h4: {
    size: 34,
    font: "Regular"
  },
  h5: {
    size: 24,
    font: "Regular"
  },
  h6: {
    size: 20,
    font: "Medium"
  },
  subtitle1: {
    size: 16,
    font: "Regular"
  },
  subtitle2: {
    size: 14,
    font: "Medium"
  },
  body1: {
    size: 16,
    font: "Regular"
  },
  body2: {
    size: 14,
    font: "Regular"
  },
  button: {
    size: 14,
    font: "Medium"
  },
  caption: {
    size: 12,
    font: "Regular"
  },
  overline: {
    size: 10,
    font: "Regular"
  }
};

interface IProps {
  variant: Variant;
  color?: Color;
  children: React.ReactChild | React.ReactChild[];
}

const generateStyle = (props: IProps): React.CSSProperties  => {
  const v = variantProperties[props.variant];
  return {
    fontSize: `${v.size / 16}rem`,
    fontWeight: fontWeightLookup[v.font],
    color: props.color
  };
}

const Typography = (props: IProps) =>
  <p style={generateStyle(props)}>{props.children}</p>
  
export default Typography;