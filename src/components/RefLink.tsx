import React from 'react';

export const RefLink: React.FC<{}> = props => {
  return (
    <li>
      <a href={props.children?.toString()}>{props.children}</a>
    </li>
  );
}