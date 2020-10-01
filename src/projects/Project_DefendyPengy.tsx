import React from 'react';
import Divider from '../components/Divider';
import ProjectContent from '../components/ProjectContent';
import { RefLink } from '../components/RefLink';

export default class Project_DefendyPengy extends React.Component {
  static title = "Defendy Pengy";

  render() {
    return (
      <ProjectContent>
        <h1 className="page-title">{Project_DefendyPengy.title}</h1>
        <Divider />

        <img src="https://github.com/hackerspace-ntnu/Defendy-Pengy/raw/master/img/Logo.png"></img>
        <p>
          Defendy Pengy is a unique game inspired by tower defense genre. In Defendy Pengy, the player will protect the small, cute penguins against wild big animals which are coming to eat the them. There are multiple towers in the scene for the player to teleport to, and the player can choose between a bow and magic book as weapon. There are two maps available with different difficulty.
        </p>
        <p>

          I worked as a Graphic Designer and a Developer. I created the base of the project, providing support for SteamVR, and set up all the crucial parts for the team to build their work upon. Then I worked the gameplay, creating GameController, teleportation and a MagicBook weapon. For my role as a Graphic Designer, I served as the man in the middle between the graphics and developer team. Such as a role was needed as the graphics team needed to know what had to be made, and how they needed to make it for it to work as intended in game. Furthermore, I was in charge of the level design and art.
        </p>


        <hr />
        <h3>Links</h3>
        <ul>
          <RefLink>https://github.com/hackerspace-ntnu/Defendy-Pengy</RefLink>
        </ul>
      </ProjectContent>
    );
  }
}
