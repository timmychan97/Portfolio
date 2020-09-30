import React from 'react';
import Divider from '../components/Divider';

export default class Project_TheMiddleKingdom extends React.Component {
  static title = "The Middle Kingdom";

  render() {
    return (
      <div className="content-wrapper-centered" >
        <div className="page-content-margined">
          <h1 className="page-title">{Project_TheMiddleKingdom.title}</h1>
          <Divider />
        </div>
      </div>
    );
  }
}
