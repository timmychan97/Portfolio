import React from "react";
import ProjectCard from "./ProjectCard";
import '../css/ProjectCardsContainer.css';
import { ProjectUtils } from "../projects/ProjectUtils";

interface Props {
  projects: any[];
}

export default class ProjectCardsContainer extends React.Component<Props> {
  render() {
    return (
      <div className="ProjectCardsContainer">
        {this.props.projects.map((projectComp, i) =>
          <ProjectCard key={i}
            title={projectComp.title}
            url={ProjectUtils.getURL(projectComp)}
            thumbnail={ProjectUtils.getThumbnail(projectComp)} />
        )}
      </div>
    );
  }
}
