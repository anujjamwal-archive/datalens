import { Color } from "csstype";
import { IMetric, IFilter } from "./reportdata";
import { CSSProperties } from "react";

interface IHeader {
  id: string;
  heading: string;
  subheading?: string;
}

type Device =
  | "small"
  | "iphone"
  | "iphone-landscape"
  | "ipad"
  | "ipad-landscape"
  | "desktop";

type Direction = "row" | "row-reverse" | "column" | "column-reverse";

interface ILinearLayout {
  id: string;
  type: "LinearLayout";
  direction: Direction;
  paddingTop: number;
  paddingLeft: number;
  paddingRight: number;
  paddingBottom: number;
  marginTop: number;
  marginLeft: number;
  marginRight: number;
  marginBottom: number;
  childComponents?: IComponent[];
}

interface IKPI {
  id: string;
  type: "KPI";
  display: {
    height: number;
    width: number;
    top?: number;
    left?: number;
    paddingTop?: number;
    paddingLeft?: number;
    paddingRight?: number;
    paddingBottom?: number;
    marginTop?: number;
    marginLeft?: number;
    marginRight?: number;
    marginBottom?: number;
  };
  data: {
    source: string;
    metric: IMetric;
    filter?: IFilter;
  };
  properties: {
    color?: Array<{ color: Color; threshold?: number }>;
    backgroundColor?: Array<{ color: Color; threshold?: number }>;
  };
}

interface ISelect {
  id: string;
  type: "Select";
  display: {
    height: number;
    width: number;
    paddingTop?: number;
    paddingLeft?: number;
    paddingRight?: number;
    paddingBottom?: number;
    marginTop?: number;
    marginLeft?: number;
    marginRight?: number;
    marginBottom?: number;
  };
  data: {
    source: string;
    metrics: Array<IMetric>;
    filter?: IFilter;
  };
  properties: {
    value: string;
    label: string;
  };
}

interface IPanel {
  id: string;
  type: "Panel";
  display: {
    height: number;
    width: number;
    paddingTop?: number;
    paddingLeft?: number;
    paddingRight?: number;
    paddingBottom?: number;
    marginTop?: number;
    marginLeft?: number;
    marginRight?: number;
    marginBottom?: number;
    cornerRadius?: number;
    backgroundColor?: Color;
  };
  childComponent?: IComponent;
}

type IWidget = IKPI | IPanel | ISelect;

type IComponent = ILayout | IWidget;

type ILayout = ILinearLayout;

interface IPage {
  id: string;
  filters?: IComponent;
  component: IComponent;
}

interface IDashboard {
  id: string;
  header: IHeader;
  pages: Array<IPage>;
}

export {
  Device,
  IComponent,
  IDashboard,
  IHeader,
  IKPI,
  ISelect,
  ILayout,
  ILinearLayout,
  IPage,
  IPanel,
  IWidget
};
