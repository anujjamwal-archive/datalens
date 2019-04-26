import { Color } from "csstype";

interface IHeader {
  id: string;
  heading: string;
  subheading: string;
}

type Direction = "row" | "row-reverse" | "column" | "column-reverse";

interface ILinearLayout {
  id: string;
  direction: Direction;
  paddingTop: number;
  paddingLeft: number;
  paddingRight: number;
  paddingBottom: number;
  marginTop: number;
  marginLeft: number;
  marginRight: number;
  marginBottom: number;
  children?: Array<IComponent>;
}

interface IKPI {
  id: string;
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
    metric: {
      aggregationFn: string;
      field: string;
      alias: string;
    };
    filter?: {}
  };
  properties: {
    color?: Array<{color: Color; threshold?: number;}>;
    backgroundColor?: Array<{color: Color; threshold?: number;}>;
  };
}

type IWidget = IKPI;

type IComponent = ILayout | IWidget;

type ILayout = ILinearLayout;

interface IPage {
  id: string;
  component: IComponent;
}

interface IReport {
  id: string;
  header: IHeader;
  pages: Array<IPage>;
}

export {
  IComponent,
  IHeader,
  IKPI,
  ILayout,
  ILinearLayout,
  IPage,
  IReport,
  IWidget,
};