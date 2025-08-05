import React from "react";
import HeroImage from "../assets/Hero-image.jpg";
import { Education } from ".";

const Experience = () => {
  return (
    <div className="relative">
      {/* Decorative background lines and gradient */}
      <div className="relative z-10 mx-auto">
        <div className="absolute inset-x-0 bottom-0 h-px overflow-hidden">
          <div className="absolute -right-8 bottom-0 -left-8 h-px bg-slate-900/[0.1] [mask-image:linear-gradient(to_right,transparent,white_4rem,white_calc(100%-4rem),transparent)]"></div>
        </div>
        <div className="absolute bottom-0 flex items-end h-8 overflow-hidden lg:left-44 sm:left-20">
          <div className="flex -mb-px h-[2px] w-80 -scale-x-100">
            <div className="w-full flex-none blur-sm [background-image:linear-gradient(90deg,rgba(56,189,248,0)_0%,#0EA5E9_32.29%,rgba(236,72,153,0.3)_67.19%,rgba(236,72,153,0)_100%)]"></div>
            <div className="-ml-[100%] w-full flex-none blur-[1px] [background-image:linear-gradient(90deg,rgba(56,189,248,0)_0%,#0EA5E9_32.29%,rgba(236,72,153,0.3)_67.19%,rgba(236,72,153,0)_100%)]"></div>
          </div>
        </div>
      </div>

      {/* Hero background image */}
      <div className="absolute inset-0 overflow-hidden bg-indigo-50 -bottom-10 lg:-bottom-2 md:-bottom-32 -top-10">
        <img
          src={HeroImage}
          alt="Hero background"
          width="918"
          height="1495"
          decoding="async"
          className="absolute top-0 left-full -translate-x-1/2 sm:left-1/2 sm:translate-x-[-20%] sm:translate-y-[-15%] md:translate-x-0 lg:translate-x-[5%] lg:translate-y-[4%] xl:translate-x-[27%] xl:translate-y-[5%]"
          style={{ color: "transparent" }}
        />
        <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-white"></div>
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-white"></div>
      </div>

      {/* Content section */}
      <div className="relative max-w-screen-xl px-6 py-12 mx-auto font-sans md:px-12 lg:px-24">
        <div className="lg:flex lg:justify-between lg:gap-4">
          {/* Left Panel */}
          <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between md:py-12 lg:py-24">
            <div>
              <h2 className="text-4xl font-medium tracking-tighter text-blue-600 font-display sm:text-5xl">
                Where I’ve Worked
              </h2>
              <p className="max-w-xs mt-4 text-lg tracking-tight text-blue-900 font-display">
                I build exceptional and accessible digital experiences for the
                web.
              </p>

              <nav
                className="hidden nav lg:block mt-16"
                aria-label="In-page jump links"
              >
                <ul className="w-max">
                  <li>
                    <a className="flex items-center py-3 group" href="#Crek">
                      <span className="w-8 h-px mr-4 transition-all bg-black nav-indicator group-hover:w-16 group-hover:bg-blue-600 motion-reduce:transition-none"></span>
                      <span className="text-base font-bold tracking-widest text-black uppercase group-hover:text-blue-600">
                        Crek
                      </span>
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </header>

          {/* Right Panel */}
          <main id="content" className="pt-12 md:pt-2 lg:w-1/2 lg:py-24">
            <section
              id="experience"
              className="mb-8 scroll-mt-16 md:mb-16 lg:mb-36 lg:scroll-mt-24"
            >
              <ol className="group/list">
                <li id="Crek" className="mb-12">
                  <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                    <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-xl transition lg:-inset-x-6 lg:block lg:group-hover:drop-shadow-lg lg:group-hover:bg-transparent lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)]"></div>

                    <header className="z-10 mt-1 mb-2 text-sm font-semibold tracking-wide uppercase text-slate-500 sm:col-span-2">
                      Feb 2024 – May 2025
                    </header>

                    <div className="z-10 sm:col-span-6">
                      <h3 className="font-medium leading-snug text-slate-200">
                        <a
                          className="inline-flex items-baseline text-base font-medium leading-tight text-black hover:text-blue-600"
                          rel="noreferrer noopener"
                          aria-label="Software Engineer at Flutions"
                        >
                          <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded-xl md:-inset-x-6 md:-inset-y-4 lg:block hover:border-2 hover:border-blue-600"></span>
                          <span>
                            Software Developer -{" "}
                            <span className="inline-block">Crek</span>
                          </span>
                        </a>
                      </h3>

                      <p className="mt-2 text-base leading-normal text-slate-700">
                        Designed and developed responsive UIs using Angular and
                        Angular Material, delivering a smooth and modern user
                        experience across devices. Integrated RESTful APIs,
                        improving data flow efficiency. Built custom, reusable UI components to enhance
                        maintainability and scalability. Improved form
                        validation and state handling, ensuring seamless user
                        input and reducing errors. Collaborated in Agile
                        workflows, automating tasks with JIRA and contributing
                        to faster delivery cycles.
                      </p>
                    </div>
                  </div>
                </li>
              </ol>

              {/* Resume Link */}
              <div className="mt-12">
                <a
                  className="inline-flex items-center font-semibold leading-tight text-slate-500 group"
                  href="/Vignesh_Resume_portfolio.pdf"
                  target="_blank"
                  rel="noreferrer noopener"
                  aria-label="View Full Résumé"
                >
                  <span className="pb-px transition border-b border-transparent group-hover:border-blue-300">
                    View Full Resume
                  </span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="inline-block w-4 h-4 ml-1 transition-transform -translate-y-px group-hover:translate-x-2"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
              </div>
            </section>
          </main>
        </div>
      </div>

      {/* Education Section */}
      <Education />
    </div>
  );
};

export default Experience;
