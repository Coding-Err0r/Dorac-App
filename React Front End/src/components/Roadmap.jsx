import React from "react";
import RoadmapBG from "../assets/bg-3.png";
import blueDog from "../assets/blue-dog.png";
import RoadCard from "./RoadCard";
import { RoadMap } from "./Data";

import { motion } from "framer-motion";
import { PopUp } from "./animation";

import BG4 from "../assets/bg/bg4.png";

const Roadmap = () => {
  return (
    <motion.div
      style={{ backgroundImage: `url(${BG4})` }}
      initial={"offscreen"}
      whileInView={"onscreen"}
      transition={{ staggerChildren: 0.2 }}
      viewport={{ once: false, amount: 0.5 }}
    >
      <motion.div className="wrapper" id="roadmap">
        <div className=" w-full text-center">
          <h2 className="title">Roadmap</h2>
          <p className="text-gray-300 text-xl font-light mt-4 mb-10">
            OUR JOURNEY
          </p>
        </div>

        {/* main */}
        <div className="grid md:grid-cols-7 md:gap-12">
          <motion.div className="py-6 col-span-3 h-full md:flex items-center justify-end">
            <img
              src={blueDog}
              className="md:max-w-[400px]  md:float-right md:pr-12"
              alt=""
            />
          </motion.div>
          {/* xl:max-h-[600px] overflow-y-auto my-4 scrollbar-hide */}
          <motion.div className="h-[400px] flex gap-10 xl:block xl:h-[550px] xl:snap-y xl:snap-mandatory overflow-x-auto xl:overflow-y-auto scrollbar-hide text-gray-100 relative  col-span-4 md:pl-4">
            {RoadMap.map((data, index) => (
              <div
                className="xl:h-full xl:snap-center flex items-center"
                key={data.id}
              >
                <RoadCard data={data} />
              </div>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Roadmap;
