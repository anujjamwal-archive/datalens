import { Color } from "csstype";
import { IMetric, IFilter } from "./reportdata";
import { CSSProperties } from "react";

interface IHeader {
  id: string;
  heading: string;
  subheading?: string;
}

type Device = "small" | "iphone" | "iphone-landscape" | "ipad" | "ipad-landscape" | "desktop";

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
    color?: Array<{color: Color; threshold?: number;}>;
    backgroundColor?: Array<{color: Color; threshold?: number;}>;
  };
}

interface IPanel {
  id: string;
  type: "Panel" | "FilterPanel";
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
  childComponents?: Array<IComponent>;
}

type IWidget = IKPI | IPanel;

type IComponent = ILayout | IWidget;

type ILayout = ILinearLayout;

interface IPage {
  id: string;
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
  ILayout,
  ILinearLayout,
  IPage,
  IPanel,
  IWidget,
};