import React from 'react';
import Divider from '../components/Divider';

export default class Project_CTFSearch extends React.Component {
  static title = "CTF Search";

  render() {
    return (
      <div className="content-wrapper-centered" >
        <div className="page-content-margined">
          <h1 className="page-title">{Project_CTFSearch.title}</h1>
          <Divider />
        </div>
      </div>
    );
  }
}
