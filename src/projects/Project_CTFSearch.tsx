import React from 'react';
import Divider from '../components/Divider';
import ProjectContent from '../components/ProjectContent';

export default class Project_CTFSearch extends React.Component {
  static title = "CTF Search";

  render() {
    return (
      <ProjectContent>
        <h1 className="page-title">{Project_CTFSearch.title}</h1>
        <Divider />
      </ProjectContent>
    );
  }
}
