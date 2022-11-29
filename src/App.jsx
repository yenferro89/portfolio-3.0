import { IoMenu } from "react-icons/io5";
import Spline from "@splinetool/react-spline";
import { useState } from "react";
import logo from "./images/logo.svg";
import { AnimatePresence, motion } from "framer-motion";
import React, { Suspense } from 'react';
const Main = React.lazy(() => import('./Main'));

function App() {
  const [isActive, setIsActive] = useState(false);

  return (
    <AnimatePresence initial={`${false}`}>
      <div className="flex w-screen min-h-screen flex-col items-center justify-center relative bg-primary pb-20">
        {/* Navigation Bar*/}
        <nav className="w-full px-6 z-50 fixed inset-x-0 top-2 flex justify-center items-center">
          <div className="w-full md:w-880 bg-navBar p-4 rounded-2xl flex items-center">
            <div>
              <img src={logo} className="App-logo" alt="logo" />
            </div>

            <p className="text-lg text-slate-200 font-medium">
              Yen Pinero Ferro
            </p>
            <div className="hidden md:flex items-center gap-6 ml-6 flex-1">
              <a
                href="#home"
                className="text-base text-textBase font-medium hover:text-slate-100 cursor-pointer duration-100 ease-in-out"
              >
                Home
              </a>
              <a
                href="#about"
                className="text-base text-textBase font-medium hover:text-slate-100 cursor-pointer duration-100 ease-in-out"
              >
                About
              </a>
              <a
                href="#experience"
                className="text-base text-textBase font-medium hover:text-slate-100 cursor-pointer duration-100 ease-in-out"
              >
                Experience
              </a>
              <a
                href="#projects"
                className="text-base text-textBase font-medium hover:text-slate-100 cursor-pointer duration-100 ease-in-out"
              >
                Projects
              </a>
              <a
                href="#contact"
                className="text-base text-textBase font-medium hover:text-slate-100 cursor-pointer duration-100 ease-in-out"
              >
                Contact
              </a>
              <motion.a
                whileTap={{ scale: 0.5 }}
                href="https://drive.google.com/file/d/1n593bJ6LoG4JytRQpn9DmC6r8B_8gTrt/view?usp=share_link"
                target={"_blank"}
                rel="noreferrer"
                className="ml-auto text-base text-textBase font-medium hover:text-slate-100 cursor-pointer border border-textBase px-2 py-1 rounded-xl hover:border-gray-100 duration-100 ease-in-out"
              >
                Download
              </motion.a>
            </div>
            <motion.button
              whileTap={{ scale: 0.5 }}
              className="block md:hidden ml-auto cursor-pointer"
              aria-label="Menu"
              onClick={() => setIsActive(!isActive)}
            >
              <IoMenu className="text-2xl text-textBase"></IoMenu>
            </motion.button>

            {isActive && (
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1.1 }}
                exit={{ opacity: 0, scale: 0.5 }}
                transition={{ delay: "0.1s", type: "spring" }}
                className="p-4 w-275 bg-navBar rounded-lg fixed top-24 right-24 flex flex-col items-center justify-evenly gap-6"
              >
                <a
                  href="#home"
                  className="text-base text-textBase font-medium hover:text-slate-100 cursor-pointer duration-100 ease-in-out"
                  onClick={() => {
                    setIsActive(false);
                  }}
                >
                  Home
                </a>
                <a
                  href="#about"
                  className="text-base text-textBase font-medium hover:text-slate-100 cursor-pointer duration-100 ease-in-out"
                  onClick={() => {
                    setIsActive(false);
                  }}
                >
                  About
                </a>
                <a
                  href="#experience"
                  className="text-base text-textBase font-medium hover:text-slate-100 cursor-pointer duration-100 ease-in-out"
                  onClick={() => {
                    setIsActive(false);
                  }}
                >
                  Experience
                </a>
                <a
                  href="#projects"
                  className="text-base text-textBase font-medium hover:text-slate-100 cursor-pointer duration-100 ease-in-out"
                  onClick={() => {
                    setIsActive(false);
                  }}
                >
                  Projects
                </a>
                <a
                  href="#contact"
                  className="text-base text-textBase font-medium hover:text-slate-100 cursor-pointer duration-100 ease-in-out"
                  onClick={() => {
                    setIsActive(false);
                  }}
                >
                  Contact
                </a>
                <a
                  href="https://drive.google.com/file/d/1n593bJ6LoG4JytRQpn9DmC6r8B_8gTrt/view?usp=share_link"
                  target={"_blank"}
                  rel="noreferrer"
                  className="text-base text-textBase font-medium hover:text-slate-100 cursor-pointer border border-textBase px-2 py-1 rounded-xl hover:border-gray-100 duration-100 ease-in-out"
                  onClick={() => {
                    setIsActive(false);
                  }}
                >
                  Download
                </a>
              </motion.div>
            )}
          </div>
        </nav>

        <section className="relative" id="home">
          <Spline scene="https://prod.spline.design/9PcjHahhRRFXyetU/scene.splinecode" />
          <div className="absolute bottom-10 w-full justify-center inline-flex">
            <div className="shadow-md p-4 bg-zinc-900 rounded-3xl">
              <p className="text-textBase">Press and drag to orbit</p>
            </div>
          </div>
        </section>
        <Suspense>
          <Main/>
        </Suspense>

        
      </div>
    </AnimatePresence>
  );
}

export default App;
