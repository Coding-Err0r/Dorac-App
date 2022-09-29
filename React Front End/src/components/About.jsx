import AboutBG from "../assets/bg-2.png";
import "./custom.css";

import Video2 from "../assets/video/video.gif";
import Video1 from "../assets/video/video2.gif";

import { motion } from "framer-motion";
import { FromRightNormal, PopUp } from "./animation";

import BG1 from "../assets/bg/bg1.png";

const About = () => {
  return (
    <div style={{ backgroundImage: `url(${BG1})` }}>
      <motion.div
        className="wrapper mt-6 lg:mt-0 overflow-hidden xl:pb-[200px]"
        initial={"offscreen"}
        whileInView={"onscreen"}
        transition={{ staggerChildren: 0.2 }}
        viewport={{ once: false, amount: 0.5 }}
        id="#about"
      >
        <motion.div className="grid md:grid-cols-7 gap-6 relative">
          <motion.div variants={PopUp} className="md:col-span-3 relative">
            <div className="transform3D">
              <img
                className="border-2 border-gray-100/50 xl:absolute rounded-xl mt-20 xl:-mt-12 xl:ml-12"
                src={Video1}
                alt=""
              />
              <br />
              <img
                className="w-[80%] border-2 border-gray-100/50 xl:absolute rounded-xl mt-[-50px] ml-[100px] xl:ml-0 xl:mt-36 xl:left-40"
                src={Video2}
                alt=""
              />
            </div>
          </motion.div>
          <motion.div
            variants={FromRightNormal}
            className="md:col-span-4 flex flex-col justify-center xl:pl-6"
          >
            <h2 className="title text-center md:text-left">About the game</h2>
            <p className="para max-w-[720px] mt-4 leading-7">
              DoRac is a metaverse space crypto play and earn game that will
              offer a few ways on how you as a player or just a visitor can
              participate in the metaverse. Starting with raising your own dogs,
              breeding, and training them to perform better in competitions and
              races. As a company, we want to provide our users with an
              entertaining metaverse where they can have fun and earn money by
              playing. Exciting upgrades will come along with platform growth.
            </p>

            <div className="flex justify-center md:justify-start">
              <a
                href="https://dorac.app/whitepaper/626c73845d4eb45942f0e7dd"
                className="bg-cyan-700 text-white py-3 px-12 flex w-fit text-xl items-center gap-2 rounded-lg mt-6 hover:bg-cyan-600 duration-300"
                download={true}
              >
                Whitepaper
              </a>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default About;
