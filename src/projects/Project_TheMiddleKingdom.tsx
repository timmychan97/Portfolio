import React from 'react';
import Divider from '../components/Divider';
import ProjectContent from '../components/ProjectContent';
import { RefLink } from '../components/RefLink';
import { YoutubeVideo } from '../components/YoutubeVideo';

export default class Project_TheMiddleKingdom extends React.Component {
  static title = "The Middle Kingdom";

  render() {
    return (
      <ProjectContent>
        <h1 className="page-title">{Project_TheMiddleKingdom.title}</h1>
        <Divider />
        <p>
          An indie 3D tower defense game created in Unity by a small team of enthusiast. The game is hexagonal tile based and the gameplay might be similar to traditional tower defense game.
        </p>
        <p>
          The game is still in development.
        </p>
        <YoutubeVideo src="https://www.youtube.com/embed/fK4xv7BwBFw" />
        <YoutubeVideo src="https://www.youtube.com/embed/CedDJkuNoaU" />


        <hr />
        <h3>Links</h3>
        <ul>
          <RefLink>https://github.com/timmychan97/HexagonTowerDefense</RefLink>
        </ul>
      </ProjectContent>
    );
  }
}
