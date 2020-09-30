import React from 'react';
import Divider from '../components/Divider';
import ProjectContent from '../components/ProjectContent';
import { RefLink } from '../components/RefLink';

export default class Project_SmartShip extends React.Component {
  static title = "SmartShip";
  static thumbnail = "img/project/SmartShip/thumbnail.png";
  imgPath = "/img/project/SmartShip/";

  render() {
    return (
      <ProjectContent>
        <h1 className="page-title">{Project_SmartShip.title}</h1>
        <Divider />

        <img src={this.imgPath + "group-pic.jpg"}></img>
        <p>
          SmartShip is a summer intern project at Kongsberg Maritime AS. The main focus is to develop a working model of an autonomous zero-emission ship. This model is 1:12 size of the real deal. The team of 13 students from different studies had to combine their knowledge and build the ship together.
        </p>
        <p>
          In 2018, I participated on the project as a Software and Network Engineer. Here I worked on the Control Center, creating the user interface using WPF in C#, which is used to control the physical ship in real time.
        </p>

        <p>
          As the hardware group needed support on the network communimation, I was assigned the job to help them create a working network communication with the Control Center. I created an IP Camera streaming service in C# both in WPF and in Unity.
        </p>

        <hr />
        <h3>Links</h3>
        <ul>
          <RefLink>https://www.kongsberg.com/careers/summer-jobs/smartship/</RefLink>
        </ul>


      </ProjectContent>
    );
  }
}
