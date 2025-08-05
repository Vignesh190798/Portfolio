import React from 'react';
import { SocialMedia, Intro, About, Experience, FeaturedProjects, Contact } from "../components";

const Home = () => {
  return (
    <div>
      <SocialMedia />
      <Intro />
      <About />
      <Experience />
      <FeaturedProjects />
      <Contact />
    </div>
  );
};

export default Home;