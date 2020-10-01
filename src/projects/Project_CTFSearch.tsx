import React from 'react';
import Divider from '../components/Divider';
import { Indent } from '../components/Indent';
import ProjectContent from '../components/ProjectContent';

export default class Project_CTFSearch extends React.Component {
  static title = "CTF Search";

  render() {
    return (
      <ProjectContent>
        <h1 className="page-title">{Project_CTFSearch.title}</h1>
        <Divider />

        <h3>Project Description</h3>
        <p>
          CTF Search is an online portal where students propose, design and develop security capture-the-flag (CTF) exercises for their peers. The portal supports functionality to edit assignment text, assign a unique flag to the problem, check and track submission of flags, and display a leaderboard. The normal flow of interactions can be divided into three parts:
        </p>
        <Indent>
          <i>Research, design</i>
          <p>Researching Common Vulnerabilities and Exposures (CVE) lists for vulnerabilities of an appropriate level (e.g., remote-code execution via command injection would be an easy challenge; use-after-free leading to code execution would be a difficult challenge).
          </p>
          <i>Implementation</i>
          <p>
            Set up prerequisites for exploitation (e.g., install vulnerable version of the software in a VM, make necessary ports available) and hide a flag (unique hash or string).
          </p>
          <i>Solving</i>
          <p>
            Students or groups of students exchange challenges and try to discover the flags. Flags are submitted to the website when found.
          </p>
        </Indent>

        <h3>The Work</h3>
        <p>
          The team had to create the portal (backend and frontend), and provide support for automatically generating CTF challenges based on known vulnerabilities, and let the users control and solve the CTF on the portal on a website. I was assigned to work with kernel based CTF challenges. Which are challenges the solvers need to utilise vulnerabilities in the kernel of the victim machine. My work was to write (Bash and Python) scripts to build custom Kernel images and Linux distribution images, and run them all in Qemu KVM, all automatically, depending on the user input. The scripts will automatically setup relevant services such as SSH and other packages, and return credentials for the users to control the machine remotely.
        </p>



      </ProjectContent>
    );
  }
}
