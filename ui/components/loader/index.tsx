import * as React from "react";

interface Props {
  height: number;
  width: number;
  x: number;
  y: number;
}

const Loader = ({height, width, x, y}: Props) =>
  <image xlinkHref={require("./loader.gif")} height={height} width={width} x={x} y={y}/>

export default Loader;