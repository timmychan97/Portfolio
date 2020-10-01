import React from 'react';
import '../css/Indent.css';

export const Indent: React.FC<{}> = props => {
  return (
    <div className="Indent">
      {props.children}
    </div>
  );
}