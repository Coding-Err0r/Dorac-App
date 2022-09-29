import React from "react";
import BG from "../assets/home-bg.png";
import HomeLogo from "../assets/LogoHD.png";
import ButtonBG from "../assets/button-bg.png";
import GoldenDog from "../assets/gold-dog.png";
import PinkDog from "../assets/pink-dog.png";

import { motion } from "framer-motion";
import { FromLeft, FromRight, PopUp } from "./animation";
import Social from "./Social";
import "./custom.css";

import { BsFillPhoneFill } from "react-icons/bs";
import { HiOutlineDesktopComputer } from "react-icons/hi";
import { TbWorld } from "react-icons/tb";

const Hero = () => {
  const [showModal, setShowModal] = React.useState(false);
  return (
    <motion.div
      className="w-full min-h-screen bg-cover bg-no-repeat bg-center overflow-hidden relative"
      style={{ backgroundImage: `url(${BG})` }}
      initial={"offscreen"}
      whileInView={"onscreen"}
      transition={{ staggerChildren: 0.2 }}
      viewport={{ once: false, amount: 0.5 }}
    >
      <motion.div variants={FromLeft}>
        <img
          className="absolute top-[20%] hidden md:block lg:left-32"
          src={GoldenDog}
          alt=""
        />
      </motion.div>
      <motion.div variants={FromRight}>
        <img
          className="absolute hidden md:block right-0 lg:right-32 top-[20%]"
          src={PinkDog}
          alt=""
        />
      </motion.div>
      <div className="hidden md:block fixed right-0 top-[30%] mr-12">
        <Social vartically />
      </div>
      <motion.div className="min-h-screen in-wrapper flex items-center justify-center relative z-10">
        <motion.div className="max-w-[1024px] flex flex-col items-center justify-center gap-y-4 px-4">
          <motion.div variants={PopUp}>
            <img
              className="max-w-[170px] md:max-w-[200px] md:w-[350px] lg:w-[400px]"
              src={HomeLogo}
              alt=""
            />
          </motion.div>
          <h1 className="text-white text-center">
            A <span className="gradientTextAnimation">METAVERSE SPACE </span>{" "}
            PLAY AND EARN GAME.
          </h1>
          <p className="text-gray-300 text-center mb-10">
            Start with raising your own dogs, breeding, and training them to
            perform better in competitions and races.
          </p>

          <motion.button
            onClick={() => setShowModal(true)}
            variants={PopUp}
            className="py-3 w-[350px] font-bold h-[70px] px-6 bg-contain bg-no-repeat bg-center text-white"
            style={{ backgroundImage: `url(${ButtonBG})` }}
          >
            <span className="text-red-500">PLAY NOW</span> ALPHA TEST
          </motion.button>
        </motion.div>
      </motion.div>
      <motion.div
        className="container w-full h-[4px] bg-gradient-to-r from-transparent via-violet-500 to-transparent mx-auto"
        id="about"
      ></motion.div>

      {/* modal */}
      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none bg-black/40 backdrop-blur-sm">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border border-white/40 rounded-[20px] shadow-lg relative flex flex-col min-w-[350px] md:min-w-[450px] mx-auto bg-[#150b20] outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 rounded-t">
                  <h3 className="text-2xl font-semibold text-gray-300">
                    Choose Device
                  </h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-gray-300 float-right text-3xl leading-none font-semibold outline-none focus:outline-none hover:text-gray-400"
                    onClick={() => setShowModal(false)}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="w-6 h-6"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto">
                  <div className="flex flex-col gap-4 items-center">
                    <a
                      href="https://drive.google.com/drive/u/0/folders/10KpU6UFc8bY8Y39kI4s-A4Hsql_j-o4f"
                      target="_blank"
                      className="bg-indigo-700 flex flex-col items-center gap-2 w-[200px] text-center py-2 px-10 rounded-md font-semibold text-white hover:bg-indigo-800 duration-300"
                    >
                      <span className="text-4xl mt-1">
                        <BsFillPhoneFill />
                      </span>
                      Mobile App
                    </a>
                    <a
                      href="https://drive.google.com/drive/folders/1_0QSwc2Gl4VfefI1zvUBfyhhZhMXcWYX"
                      target="_blank"
                      className="bg-indigo-700 flex flex-col  items-center gap-2 w-[200px] text-center py-2 px-10 rounded-md font-semibold text-white hover:bg-indigo-800 duration-300"
                    >
                      <span className="text-4xl mt-1">
                        <HiOutlineDesktopComputer />
                      </span>
                      Desktop App
                    </a>
                    <a
                      href="https://dorac.org/"
                      target="_blank"
                      className="bg-indigo-700 flex flex-col  items-center gap-2 w-[200px] text-center py-2 px-10 rounded-md font-semibold text-white hover:bg-indigo-800 duration-300"
                    >
                      <span className="text-4xl mt-1">
                        <TbWorld />
                      </span>
                      Web App
                    </a>
                  </div>
                  <br />
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
      {/* modal */}
    </motion.div>
  );
};

export default Hero;
