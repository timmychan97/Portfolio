import React, { useCallback } from 'react';
import '../css/ProjectContent.css';

export default function ProjectContent(props: React.PropsWithChildren<{}>) {
  return (
    <div className="ProjectContent content-wrapper-centered" >
      <div className="page-content-margined">
        {props.children}
      </div>
    </div>
  );
}
