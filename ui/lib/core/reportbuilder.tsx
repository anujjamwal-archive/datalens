import * as React from 'react';
import { Dag } from "./dag";
import { IComponent, ILinearLayout, IPanel, IKPI, Device } from "./report";
import LinearLayout from '../../components/linearlayout';
import Panel from '../../components/panel';
import KPI from '../../components/kpi';

export class PageBuilder {
  dag: Dag

  constructor(dag: Dag) {
    this.dag = dag;
  }

  build(c: IComponent): React.ReactChild {
    if (c.type == "LinearLayout")
      return this.buildLinearLayout(c as ILinearLayout);
    if (c.type == "Panel")
      return this.buildPanel(c as IPanel);
    if (c.type == "KPI")
      return this.buildKpi(c as IKPI);
    return <div></div>;
  }

  buildLinearLayout(c: ILinearLayout): React.ReactChild {
    return <LinearLayout key={c.id} spec={c}>
      {c.childComponents && c.childComponents.map(child => this.build(child))}
    </LinearLayout>
  }

  buildPanel(c: IPanel): React.ReactChild {
    return <Panel key={c.id} spec={c}>
      {c.childComponents && c.childComponents.map(child => this.build(child))}
    </Panel>
  }

  buildKpi(c: IKPI): React.ReactChild {    
    const status = this.dag.variable("myvar");
    const data = this.dag.variable("myvar");
    setTimeout(() => status.assign(Math.random() * 100), 5000);
    setInterval(() => data.assign(Math.random() * 100), 1000);
    return <KPI key={c.id} spec={c} loadStatusProvider={status} dataProvider={data} />
  }
}

export const DeviceMediaQuery: Record<Device, string> = {
  small: "@media only screen and (max-device-width: 480px)",
  iphone: "@media only screen " +
    "and (min-device-width: 375px) " +
    "and (max-device-width: 812px) " +
    "and (-webkit-min-device-pixel-ratio: 3)" +
    "and (orientation: portrait)",
  "iphone-landscape": "@media only screen " +
    "and (min-device-width: 375px) " +
    "and (max-device-width: 812px) " +
    "and (-webkit-min-device-pixel-ratio: 3)" +
    "and (orientation: landscape)",
  ipad: "@media only screen " +
    "and (min-device-width: 768px) " +
    "and (max-device-width: 1024px) " +
    "and (orientation: portrait) " +
    "and (-webkit-min-device-pixel-ratio: 1)",
  "ipad-landscape": "@media only screen " +
    "and (min-device-width: 768px) " +
    "and (max-device-width: 1024px) " +
    "and (orientation: landscape) " +
    "and (-webkit-min-device-pixel-ratio: 1)",
  desktop: "@media (min-width: 1200px)",
};
