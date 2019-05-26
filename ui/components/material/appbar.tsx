import * as React from 'react';

const generateStyle = (props: IProps): React.CSSProperties => ({
  height: "27px",
  padding: "16px",
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between"
})

interface IProps {
  children?: React.ReactChild | React.ReactChild[]
}

const AppBar: React.SFC<IProps> = (props: IProps) =>
  <header style={generateStyle(props)}>
    {props.children}
  </header>;

export default AppBar;
