import React from "react";
import { FiDownload } from "react-icons/fi";
import HeroImage from "../assets/Hero-image.jpg";

const Intro = () => {
  return (
    <main className="flex-auto">
      <div className="relative py-20 sm:pb-24 sm:pt-36">
        <div className="absolute inset-0 overflow-hidden bg-indigo-50 -bottom-14 -top-36">
          <img
            src={HeroImage}
            alt=""
            fetchpriority="high"
            width="918"
            height="1495"
            decoding="async"
            data-nimg="1"
            className="absolute top-0 left-0 translate-x-[-55%] translate-y-[-10%] -scale-x-100 sm:left-1/2 sm:translate-x-[-98%] sm:translate-y-[-6%] lg:translate-x-[-106%] xl:translate-x-[-122%]"
            style={{ color: "transparent" }}
          />
          <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-white"></div>
          <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-white"></div>
        </div>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
          <div className="mx-auto max-w-2xl lg:max-w-4xl lg:px-12">
            <p className="font-mono text-base text-blue-600">Hi, my name is</p>
            <h1 className="font-display text-5xl font-bold tracking-tighter text-blue-600 sm:text-7xl">
              Vignesh P
            </h1>
            <h1 className="font-display text-5xl font-bold tracking-tighter text-[#7194e1] sm:text-7xl">
              I build things for the web.
            </h1>
            <div className="mt-6 space-y-6 font-display text-2xl tracking-tight text-blue-900">
              <p>
                I’m a software developer who builds modern and user-friendly web
                applications. I focus on creating accessible, well-designed, and
                high-quality digital experiences.
              </p>
            </div>

            <div className="flex flex-row flex-wrap">
              <a
                href="/Vignesh_Resume_portfolio.pdf"
                className="mt-10 mx-1 px-8 py-2 rounded-md bg-gradient-to-b from-blue-500 to-blue-600 text-white focus:ring-2 focus:ring-blue-400 hover:shadow-xl transition duration-200 max-sm:px-4"
                target="_blank"
              >
                <div className="relative flex space-x-2 items-center z-10 text-white text-base">
                  <span>Resume</span>
                  <FiDownload />
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Intro;
