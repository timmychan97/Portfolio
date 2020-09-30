import React from 'react';
import Divider from '../components/Divider';

export default class Project_DefendyPengy extends React.Component {
  static title = "Defendy Pengy";

  render() {
    return (
      <div className="content-wrapper-centered" >
        <div className="page-content-margined">
          <h1 className="page-title">{Project_DefendyPengy.title}</h1>
          <Divider />
        </div>
      </div>
    );
  }
}
