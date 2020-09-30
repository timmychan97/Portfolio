import React from "react";
import ProjectCard from "./ProjectCard";
import '../css/ProjectCardsContainer.css';

interface Props {
  projects: any[];
}

export default class ProjectCardsContainer extends React.Component<Props> {
  render() {
    console.log(this.props.projects)
    return (
      <div className="ProjectCardsContainer">
        {this.props.projects.map((projectComp, i) =>
          <ProjectCard key={i} title={projectComp.title} url={"/projects/" + projectComp.title} thumbnail={projectComp.thumbnail} />
        )}
      </div>
    );
  }
}
