import React from 'react';
import Divider from '../components/Divider';
import ProjectContent from '../components/ProjectContent';

export default class Project_TheMiddleKingdom extends React.Component {
  static title = "The Middle Kingdom";
  static imgPath = "/img/project/TheMiddleKingdom/";
  static thumbnail = Project_TheMiddleKingdom.imgPath + "thumbnail.png";

  render() {
    return (
      <ProjectContent>
        <h1 className="page-title">{Project_TheMiddleKingdom.title}</h1>
        <Divider />
      </ProjectContent>
    );
  }
}
