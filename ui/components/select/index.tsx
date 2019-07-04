import * as React from "react";
import { ISelect } from "../../lib/core/report";
import { Atom } from "derivable";
import { IStatus } from "../../lib/core/reportbuilder";
import Loader from "../loader";
import Select from "../material/select";

interface Props {
  spec: ISelect;
  status: Atom<IStatus>;
}

const Sel: React.SFC<Props> = ({ spec, status }: Props) => (
  <svg viewBox="0 0 56 18">
    {status.get().status === "LOADING" ? (
      <Loader x={23} y={4} height={10} width={10} />
    ) : (
      <Select
        options={status.get().data.map((d: Record<string, any>) => ({
          label: d[spec.properties.label],
          value: d[spec.properties.value]
        }))}
      />
    )}
  </svg>
);
