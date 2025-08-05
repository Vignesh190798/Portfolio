import React from "react";
import { FiGithub } from "react-icons/fi";
import { RxOpenInNewWindow } from "react-icons/rx";
import Ecommerce from "../assets/ECommerce.png";
import healthCare from "../assets/Medical.png";

const FeaturedProjects = () => {
  return (
    <div className="mx-auto relative min-h-full max-w-screen-xl px-6 font-sans md:px-12 lg:px-24">
      <div id="projects" className="mx-auto py-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="mx-auto max-w-2xl lg:text-center md:text-center font-display text-4xl font-medium tracking-tighter text-blue-600 sm:text-5xl">
            Some Things I Have Built
          </h2>
        </div>
        <div className="w-full flex flex-col items-center justify-center gap-28 mt-20">
          <div className="flex flex-col xl:flex-row gap-6">
            <div className="w-full xl:w-1/2 relative h-[400px] overflow-hidden">
              <img
                className="w-full object-contain cursor-pointer translate-y-0 hover:-translate-y-[calc(100%-410px)] duration-[10000ms]"
                src={Ecommerce}
                alt="LMS Website"
              />
            </div>
            <div className="w-full xl:w-1/2 flex flex-col gap-6 lg:items-end text-left xl:-ml-16 z-10">
              <p className="text-sm -mb-3 font-semibold text-slate-800 tracking-wide">
                Featured Project
              </p>
              <h3 className="text-4xl font-medium tracking-tighter text-blue-600">
                Mini-Ecommerce
              </h3>
              <p className="lg:bg-[#eef2ff]/90 md:text-base text-sm lg:p-6 rounded-xl lg:text-right ">
                I built a mini e-commerce website using React.js and integrated
                it with the FakeStore API to display real product data. The app
                includes features like product listing, cart management. It has
                a clean, responsive design and shows my skills in API
                integration, state management, and front-end development.{" "}
              </p>
              <ul
                className="lg:mt-2 flex flex-wrap lg:max-w-[30rem] lg:justify-end"
                aria-label="Technologies used"
              >
                <li className="mr-1.5 mt-2">
                  <div className="flex items-center rounded-full bg-blue-400/10 px-3 py-1 text-xs font-medium leading-5 text-blue-400 ">
                    React
                  </div>
                </li>
                <li className="mr-1.5 mt-2">
                  <div className="flex items-center rounded-full bg-blue-400/10 px-3 py-1 text-xs font-medium leading-5 text-blue-400 ">
                    JavaScript
                  </div>
                </li>
                <li className="mr-1.5 mt-2">
                  <div className="flex items-center rounded-full bg-blue-400/10 px-3 py-1 text-xs font-medium leading-5 text-blue-400 ">
                    HTML
                  </div>
                </li>
                <li className="mr-1.5 mt-2">
                  <div className="flex items-center rounded-full bg-blue-400/10 px-3 py-1 text-xs font-medium leading-5 text-blue-400 ">
                    CSS(SCSS)
                  </div>
                </li>
                <li className="mr-1.5 mt-2">
                  <div className="flex items-center rounded-full bg-blue-400/10 px-3 py-1 text-xs font-medium leading-5 text-blue-400 ">
                    Tailwind CSS
                  </div>
                </li>
                <li className="mr-1.5 mt-2">
                  <div className="flex items-center rounded-full bg-blue-400/10 px-3 py-1 text-xs font-medium leading-5 text-blue-400 ">
                    React Hooks
                  </div>
                </li>
                <li className="mr-1.5 mt-2">
                  <div className="flex items-center rounded-full bg-blue-400/10 px-3 py-1 text-xs font-medium leading-5 text-blue-400 ">
                    Rest API
                  </div>
                </li>
              </ul>
              <div className="text-2xl flex gap-3">
                <a
                  href="https://github.com/Vignesh190798/Mini-ecommerce"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="hover:text-blue-600"
                >
                  <FiGithub />
                </a>
                <a
                  href="https://prismatic-sunburst-381977.netlify.app/"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="hover:text-blue-600 group relative w-auto"
                >
                  <RxOpenInNewWindow />
                </a>
              </div>
            </div>
          </div>
          {/* project 2 */}
          <div className="flex flex-col xl:flex-row-reverse gap-6">
            <div className="h-[400px] xl:w-1/2 relative w-full overflow-hidden">
              <img
                className="w-full object-contain cursor-pointer translate-y-0 hover:-translate-y-[calc(100%-410px)] duration-[10000ms]"
                src={healthCare}
                alt="Ai Chatbot Website"
              />
            </div>
            <div className="w-full xl:w-1/2 flex flex-col gap-6  text-left z-10">
              <p className="text-sm -mb-3 font-semibold text-slate-800 tracking-wide">
                Featured Project
              </p>
              <h3 className="text-4xl font-medium tracking-tighter  text-blue-600">
                Healthcare Portal
              </h3>
              <p className="lg:bg-[#eef2ff]/90 md:text-base text-sm lg:p-6 rounded-xl xl:-mr-16">
                Its a clean and minimal single-page medical care application. It
                includes sections for services, doctors, blogs, and contact, all
                wrapped in a user-friendly layout.
              </p>
              <ul
                className="lg:mt-2 flex flex-wrap lg:max-w-[30rem]"
                aria-label="Technologies used"
              >
                <li className="mr-1.5 mt-2">
                  <div className="flex items-center rounded-full bg-blue-400/10 px-3 py-1 text-xs font-medium leading-5 text-blue-400 ">
                    React
                  </div>
                </li>
                <li className="mr-1.5 mt-2">
                  <div className="flex items-center rounded-full bg-blue-400/10 px-3 py-1 text-xs font-medium leading-5 text-blue-400 ">
                    JavaScript
                  </div>
                </li>
                <li className="mr-1.5 mt-2">
                  <div className="flex items-center rounded-full bg-blue-400/10 px-3 py-1 text-xs font-medium leading-5 text-blue-400 ">
                    HTML
                  </div>
                </li>
                <li className="mr-1.5 mt-2">
                  <div className="flex items-center rounded-full bg-blue-400/10 px-3 py-1 text-xs font-medium leading-5 text-blue-400 ">
                    CSS
                  </div>
                </li>
                <li className="mr-1.5 mt-2">
                  <div className="flex items-center rounded-full bg-blue-400/10 px-3 py-1 text-xs font-medium leading-5 text-blue-400 ">
                    Tailwind CSS
                  </div>
                </li>
                <li className="mr-1.5 mt-2">
                  <div className="flex items-center rounded-full bg-blue-400/10 px-3 py-1 text-xs font-medium leading-5 text-blue-400 ">
                    React Hooks
                  </div>
                </li>
              </ul>
              <div className="text-2xl flex gap-3">
                <a
                  href="https://github.com/Vignesh190798/Health-care"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="hover:text-blue-600"
                >
                  <FiGithub />
                </a>
                <a
                  href="https://calm-queijadas-30f3a2.netlify.app/"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="hover:text-blue-600 group relative w-auto"
                >
                  <RxOpenInNewWindow />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedProjects;
