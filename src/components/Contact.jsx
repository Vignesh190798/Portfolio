import React from 'react';
import { FiDownload } from 'react-icons/fi';
import HeroImage from '../assets/Hero-image.jpg';

const Contact = () => {
  return (
    <section id="contact" aria-label="Contact">
      <div className="mx-auto lg:mt-20 mt-10 max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative -mx-4 overflow-hidden bg-indigo-50 px-4 py-20 sm:-mx-6 sm:px-6 md:mx-0 md:rounded-3xl md:px-16 xl:px-24 xl:py-36">
          <img alt="" loading="lazy" width="919" height="1351" decoding="async" data-nimg="1" className="absolute left-1/2 top-0 translate-x-[-11%] translate-y-[-43%] lg:translate-x-[-0%]" style={{ color: "transparent" }} src={HeroImage} />
          <div className="relative mx-auto max-w-2xl gap-x-32 gap-y-14 xl:max-w-none items-center">
            <p className="font-display text-4xl font-medium tracking-tighter text-blue-900 sm:text-5xl">Get In Touch</p>
            <p className="mt-4 text-lg tracking-tight max-w-md lg:max-w-2xl text-blue-900">
              I am currently open to new opportunities and invite you to reach out via email to connect and discuss potential collaborations.
            </p>
            <div className="flex flex-row flex-wrap">
              <a href='/sadain_abdullah_resume.pdf' target='_blank' className="mt-10 px-8 py-2 rounded-md bg-gradient-to-b from-blue-500 to-blue-600 text-white focus:ring-2 focus:ring-blue-400 hover:shadow-xl transition duration-200 max-sm:px-4">
                <div className="relative flex space-x-2 items-center z-10 text-white text-base">
                  <span>Resume</span>
                  <FiDownload />
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact;