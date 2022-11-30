import React from "react";
import { Experience, Projects, SocialLinks } from "./data";
import { IoLogoGithub } from "react-icons/io5";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { AnimatePresence, motion } from "framer-motion";

import Yen from "./images/IMG_0635.webp";

const Main = () => {
  return (
    <AnimatePresence initial={`${false}`}>
      {/*Main Section*/}
      <main className="w-[80%] mt-1">
        <section id="about">
          <div className="flex flex-col items-center justify-center w-full mt-12">
            <p className="text-2xl text-gray-400 capitalize">About</p>
          </div>
          <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
            <div className="w-full h-420 flex items-center justify-center">
              <div className="w-275 h-340 bg-emerald-300 rounded-md relative">
                <img
                  className="w-full h-full absolute -right-4 top-4 object-cover rounded-lg shadow-lg"
                  src={Yen}
                  alt=""
                />
              </div>
            </div>

            <div className="w-full h-420 flex flex-col items-center justify-center">
              <p className="text-lg text-textBase text-center">
                A Computer Engineer focusing on Full Stack Development,
                Artificial Intelligence, Big Data, Data System Software, and
                Embedded Systems, looking to secure a position with a
                well-established company that will lead me to a lasting
                relationship in the tech field.
              </p>
              <motion.a
                whileTap={{ scale: 0.5 }}
                href="https://drive.google.com/file/d/1n593bJ6LoG4JytRQpn9DmC6r8B_8gTrt/view?usp=share_link"
                target={"_blank"}
                rel="noreferrer"
                className="w-full md:w-auto relative mt-6 inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-white rounded-lg bg-gradient-to-br group from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:ring-green-200 dark:focus:ring-green-800 hover:shadow-lg hover:shadow-teal-500/50 hover:dark:shadow-lg hover:dark:shadow-teal-800/80"
              >
                <span className="w-full md:w-auto relative px-5 py-2.5 text-center transition-all ease-in duration-75 bg-primary dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                  Download
                </span>
              </motion.a>
            </div>
          </div>

          {/*Timeline*/}
          <div className="flex flex-col items-center justify-center w-full my-4">
            <p className="text-2xl text-gray-400 capitalize">work experience</p>
          </div>
          <div className="w-full flex items-center justify-start mb-24">
            <VerticalTimeline>
              {Experience &&
                Experience.map((n) => (
                  <VerticalTimelineElement
                    key={n.id}
                    className="vertical-timeline-element--work"
                    contentStyle={{
                      background: "rgb(21,24,31)",
                      color: "rgb(167 243 208)",
                    }}
                    contentArrowStyle={{
                      borderRight: "7px solid rgb(52,211,153)",
                    }}
                    date={`${n.date}`}
                    iconStyle={{
                      background: "rgb(21,24,31)",
                      color: "rgb(52,211,153)",
                    }}
                    icon={n.iconsSrc}
                  >
                    <h3 className="vertical-timeline-element-title">
                      {`${n.title}`}
                    </h3>
                    <h4 className="vertical-timeline-element-subtitle">
                      {`${n.location}`}
                    </h4>
                    <p className="text-textBase">{n.description}</p>
                  </VerticalTimelineElement>
                ))}
            </VerticalTimeline>
          </div>
        </section>

        {/*Projects Section*/}
        <section id="projects">
          <div className="flex flex-col items-center justify-center w-full my-4">
            <p className="text-2xl text-gray-400 capitalize">My projects</p>
          </div>
          <div className="flex flex-wrap items-center justify-evenly gap-4">
            {Projects &&
              Projects.map((n) => (
                <div
                  key={n.id}
                  className="border border-zinc-800 rounded-md p-2 min-w-[27px] md:max-w-[275px] hover:border-zinc-600 duration-100 ease-in-out"
                >
                  <p className=" text-md text-textBase font-medium uppercase">
                    {`${n.name.length}` > 25
                      ? `${n.name.slice(0, 25)}...`
                      : `${n.name}`}
                  </p>
                  <img
                    src={n.imageSrc}
                    alt=""
                    className=" w-full h-full object-cover rounded-md my-4"
                  />
                  <div className="flex flex-1 items-center justify-between">
                    <p className="text-lg text-gray-300">
                      Technologies
                      <span className="block text-sm text-gray-500">
                        {n.techs}
                      </span>
                    </p>
                    <a
                      href={n.github}
                      aria-label="GitHub"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <motion.div whileTap={{ scale: 0.8 }} className="">
                        <IoLogoGithub className=" text-textBase text-3xl cursor-pointer"></IoLogoGithub>
                      </motion.div>
                    </a>
                  </div>
                </div>
              ))}
          </div>
        </section>

        {/*Contact Section*/}
        <section
          className="flex flex-col items-center justify-center w-full mt-24"
          id="contact"
        >
          <p className=" text-2xl text-gray-400 capitalize">Contact me</p>
          <div className="flex items-center justify-center w-full my-4 flex-wrap gap-4">
            {SocialLinks &&
              SocialLinks.map((n) => (
                <motion.a
                  whileTap={{ scale: 0.8 }}
                  href={n.link}
                  target={"_blank"}
                  rel="noreferrer"
                  className="w-full md:w-auto px-3 md:px-8 py-5 border border-zinc-800 rounded-2xl hover:border-zinc-600 duration-100 ease-in-out cursor-pointer flex items-center justify-center gap-3"
                >
                  {n.iconSrc}
                  <p className=" text-lg text-textBase">{`${n.name}`}</p>
                </motion.a>
              ))}
          </div>
        </section>
      </main>
    </AnimatePresence>
  );
};

export default Main;
