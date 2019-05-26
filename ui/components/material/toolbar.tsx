import * as React from 'react';

const generateStyle = (props: IProps): React.CSSProperties => ({
  display: 'flex'
});

interface IProps {
  children: React.ReactChild | React.ReactChild[];
}

const Toolbar: React.SFC<IProps> = (props: IProps) =>
  <div style={generateStyle(props)}>{props.children}</div>;

export default Toolbar;