import React from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaNodeJs,
  FaMixcloud,
  FaGitAlt,
  FaGithub,
  FaDiceD20,
  FaChrome,
  FaSass,
} from "react-icons/fa";
import { DiJavascript } from "react-icons/di";
import { BsFiletypeJson } from "react-icons/bs";
import {
  SiMysql,
  SiTailwindcss,
  SiPostman,
  SiTypescript,
  SiRedux,
  SiBitbucket,
  SiJira,
} from "react-icons/si";

import profile from "../assets/Profile.png";


const Tag = ({ icon: Icon, text, iconColor }) => (
  <span className="flex items-center justify-center mx-2 my-2 min-w-24 px-2 py-1 text-base bg-white rounded-md shadow-md border border-neutral-200 space-x-1">
    <Icon className={iconColor} />
    <span>{text}</span>
  </span>
);

const Section = ({ title, items }) => (
  <>
    <p className="mt-4 text-xl tracking-tight text-black font-display">
      {title}
    </p>
    <div className="relative flex flex-wrap py-2 mb-2">
      {items.map((item, index) => (
        <Tag
          key={index}
          icon={item.icon}
          text={item.text}
          iconColor={item.iconColor}
        />
      ))}
    </div>
  </>
);

const About = () => {
  const programmingLanguages = [
    { icon: FaHtml5, text: "HTML5", iconColor: "text-orange-500" },
    { icon: FaCss3Alt, text: "CSS3", iconColor: "text-blue-500" },
    { icon: DiJavascript, text: "JavaScript", iconColor: "text-yellow-500" },
    { icon: SiTypescript, text: "TypeScript", iconColor: "text-blue-500" },
    { icon: SiMysql, text: "MySQL", iconColor: "text-cyan-800" },
  ];

  const librariesAndFrameworks = [
    { icon: FaReact, text: "React JS", iconColor: "text-sky-600" },
    { icon: FaNodeJs, text: "Node Js", iconColor: "text-green-700" },
    { icon: SiTailwindcss, text: "Tailwind CSS", iconColor: "text-sky-500" },
    { icon: FaSass, text: "SASS", iconColor: "text-pink-500" },
    { icon: SiRedux, text: "Redux", iconColor: "text-indigo-700" },
    { icon: FaMixcloud, text: "Rest API", iconColor: "text-sky-500" },
    { icon: BsFiletypeJson, text: "JSON", iconColor: "text-indigo-900" },
  ];

  const toolsAndPlatforms = [
    { icon: FaGitAlt, text: "Git", iconColor: "text-orange-600" },
    { icon: FaGithub, text: "GitHub", iconColor: "text-black" },
    { icon: SiBitbucket, text: "Bitbucket", iconColor: "text-blue-800" },
    { icon: FaDiceD20, text: "Netlify", iconColor: "text-sky-500" },
    { icon: SiPostman, text: "Postman", iconColor: "text-orange-500" },
    { icon: FaChrome, text: "Chrome Dev Tool", iconColor: "text-blue-500" },
    { icon: SiJira, text: "Jira", iconColor: "text-blue-600" },
  ];

  return (
    <section
      id="about-me"
      aria-labelledby="about-me-title"
      className="relative max-w-6xl px-4 py-10 mx-auto mb-4 md:py-20 sm:px-6 lg:px-8"
    >
      <h2 className="text-4xl font-medium tracking-tighter text-blue-600 font-display sm:text-5xl">
        About Me
      </h2>
      <div className=" mx-auto md:mx-0 lg:mx-0">
        <div className="relative mt-8">
          <div className="float-right flex justify-end md:pl-10 pb-5 md:w-1/2 lg:w-2/5">
            <div className="relative md:order-2 h-fit before:absolute before:inset-0 before:z-10 before:border before:rounded-xl before:transition before:hover:border-2 before:hover:border-blue-600 before:hover:shadow-lg">
              <div className="relative w-full overflow-hidden h-fit rounded-xl">
                <img
                  className="object-cover rounded-lg shadow-lg"
                  src={profile}
                  alt="About Me"
                />
              </div>
            </div>
          </div>
          <div className="text-justify lg:w-3/5">
            <p className="mt-4 text-xl tracking-tight text-blue-900 font-display">
              Hello, I'm P. Vignesh, a passionate web developer specializing in
              building responsive and user-friendly web applications using
              Angular, React, TypeScript, and other modern frontend
              technologies. I take pride in crafting clean, maintainable code
              and delivering seamless digital experiences that perform well
              across all devices.
            </p>
            <p className="mt-4 text-xl tracking-tight text-blue-900 font-display">
              Previously, I worked as a Junior Frontend Developer at CREK (Feb
              2024 – May 2025), where I contributed to building dynamic
              interfaces, integrating RESTful APIs, and enhancing UI
              performance. My recent work includes developing custom UI
              components with Angular Material, improving form handling and
              validation, and collaborating in agile teams using tools like
              Jira, Git, and Bitbucket.
            </p>
            <p className="mt-4 text-xl tracking-tight text-blue-900 font-display">
              With a strong eye for design and a deep interest in UI/UX, I focus
              on bridging the gap between functionality and aesthetics — always
              striving to deliver solutions that are both technically sound and
              visually engaging.
            </p>
            <p className="mt-4 text-xl tracking-tight text-blue-900 font-display">
              Here are the technologies with which I've been working:
            </p>
          </div>
        </div>
        <div>
          <Section
            title="Programming Languages:"
            items={programmingLanguages}
          />
          <Section
            title="Libraries & Frameworks:"
            items={librariesAndFrameworks}
          />
          <Section title="Tools & Platforms:" items={toolsAndPlatforms} />
        </div>
      </div>
    </section>
  );
};

export default About;
