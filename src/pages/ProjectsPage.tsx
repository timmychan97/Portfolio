import React from 'react';
import { Route, Switch } from 'react-router-dom';
import CardsContainer from '../components/CardsContainer';
import Divider from '../components/Divider';
import ProjectCardsContainer from '../components/ProjectCardsContainer';
import Project_CTFSearch from '../projects/Project_CTFSearch';
import Project_DefendyPengy from '../projects/Project_DefendyPengy';
import Project_SmartShip from '../projects/Project_SmartShip';
import Project_TheMiddleKingdom from '../projects/Project_TheMiddleKingdom';
import './ProjectsPage.css';


export default function ProjectsPage() {
  const projects: any[] = [
    Project_SmartShip,
    Project_TheMiddleKingdom,
    Project_DefendyPengy,
    Project_CTFSearch,
  ];
  return (

    <Switch>
      <Route exact path="/projects">
        <div className="content-wrapper-centered">
          <div className="page-content-margined">
            <h1 className="page-title">Projects</h1>
            <Divider />
            <div className="gallery-menu">
              <ProjectCardsContainer projects={projects} />
            </div>
          </div>
        </div>
      </Route>

      {projects.map((projectComp, i) =>
        <Route exact path={"/projects/" + projectComp.title} key={i} component={projectComp} />
      )}
    </Switch>

  );
}
