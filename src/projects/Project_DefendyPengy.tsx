import React from 'react';
import Divider from '../components/Divider';
import ProjectContent from '../components/ProjectContent';

export default class Project_DefendyPengy extends React.Component {
  static title = "Defendy Pengy";
  static imgPath = "/img/project/DefendyPengy/";
  static thumbnail = Project_DefendyPengy.imgPath + "thumbnail.png";

  render() {
    return (
      <ProjectContent>
        <h1 className="page-title">{Project_DefendyPengy.title}</h1>
        <Divider />
      </ProjectContent>
    );
  }
}
