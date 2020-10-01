import React from 'react';
import Divider from '../components/Divider';
import ProjectContent from '../components/ProjectContent';
import { Quote } from '../components/Quote';

export default function AboutMePage() {
  return (
    <ProjectContent>
      <h1 className="page-title">About Me</h1>
      <Divider />
      <p>
        I am an engaging student who does a lot besides school. Long before I started my studies, I was a hobbyist in IT. I realized early on the possibilities a computer had, and what I could use it for. In middle school, I explored web development, .NET, Unity 3D and modeling all by myself. It was a challenging task, because there were few online learning opportunities at the time the technology was not as mature as it is today. I have a great curiosity and commitment to technology and programming, and have done many remarkable projects. I want to explore further in the areas I have never had the opportunity to sit down for.
      </p>
      <Quote caption="Jim Rohn">
        We must all suffer from one of two pains: the pain of discipline or the pain of regret. The difference is discipline weighs ounces while regret weighs tons.

      </Quote>



    </ProjectContent>
  );
}
