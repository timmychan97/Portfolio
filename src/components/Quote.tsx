import React from 'react';
import "../css/Quote.css";

export const Quote: React.FC<{ caption: string }> = props => {

  return (
    <blockquote className="Quote">
      <p>
        {props.children}
      </p>
      <span className="caption">{props.caption}</span>
    </blockquote>
  );
}