import React from 'react';
import Divider from '../components/Divider';

export default class Project_SmartShip extends React.Component {
  static title = "SmartShip";

  render() {
    return (
      <div className="content-wrapper-centered" >
        <div className="page-content-margined">
          <h1 className="page-title">{Project_SmartShip.title}</h1>
          <Divider />
        </div>
      </div>
    );
  }
}
