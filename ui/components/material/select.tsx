import * as React from "react";

interface Props {
  options: Array<{ value: string; label: string }>;
}

const Select: React.SFC<Props> = (props: Props) => (
  <select>
    {props.options.map(p => (
      <option value={p.value}>{p.label}</option>
    ))}
  </select>
);

export default Select;
