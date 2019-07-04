import * as React from "react";
import { IKPI } from "../../lib/core/report";
import { pure } from "react-derivable";
import Loader from "../loader";
import { IStatus } from "../../lib/core/reportbuilder";
import { Atom } from "derivable";

interface IProps {
  spec: IKPI;
  isLoading: boolean;
  data: any;
  onRefresh: () => void;
}

const KPI: React.SFC<IProps> = ({ isLoading, data, spec }: IProps) => (
  <svg viewBox="0 0 56 18">
    {isLoading ? (
      <Loader x={23} y={4} height={10} width={10} />
    ) : (
      <text x="50%" y="15" textAnchor="middle">
        {data.metrics[spec.data.metric.alias]}
      </text>
    )}
  </svg>
);

interface Props {
  spec: IKPI;
  status: Atom<IStatus>;
  onRefresh: () => void;
}

export default pure((props: Props) => (
  <KPI
    {...props}
    isLoading={props.status.get().status === "LOADING"}
    data={props.status.get().data}
  />
));
