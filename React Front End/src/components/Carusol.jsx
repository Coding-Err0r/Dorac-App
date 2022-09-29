import { useEffect, useState } from "react";
import {
  MdOutlineKeyboardArrowRight,
  MdOutlineKeyboardArrowLeft,
} from "react-icons/md";

import CarusolCard from "./CarusolCard";
import { Data } from "./Data";

import { motion } from "framer-motion";
import { PopUp } from "./animation";

import BG3 from "../assets/bg/bg3.png";

const Carusol = () => {
  const [item, setItem] = useState(1);
  const [Send, setSend] = useState({});

  function setData() {
    const temp = Data.find((data) => data.id === item);
    setSend(temp);
  }

  useEffect(() => {
    setData();
  }, [item]);

  return (
    <motion.div
      style={{ backgroundImage: `url(${BG3})` }}
      initial={"offscreen"}
      whileInView={"onscreen"}
      transition={{ staggerChildren: 0.2 }}
      viewport={{ once: false, amount: 0.5 }}
    >
      {/* <div className="container w-full h-[2px] bg-gradient-to-r from-transparent via-violet-500 to-transparent mx-auto"></div> */}
      <div className="wrapper" id="economy">
        <h2 className="title w-full text-center pt-12 pb-6">
          Decentralised Economy
        </h2>

        <motion.div variants={PopUp}>
          <CarusolCard data={Send} />
        </motion.div>
        <div className="text-white w-full text-center pt-4 md:pt-0">
          <button
            disabled={item === 1}
            className="p-2 bg-violet-600 rounded-full text-xl mr-2 ml-2 hover:bg-violet-700 disabled:opacity-50"
            onClick={() => setItem(item - 1)}
          >
            <MdOutlineKeyboardArrowLeft />
          </button>
          <button
            disabled={item === Data.length}
            className="p-2 bg-violet-600 rounded-full text-xl ml-2 hover:bg-violet-700 disabled:opacity-50"
            onClick={() => setItem(item + 1)}
          >
            <MdOutlineKeyboardArrowRight />
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default Carusol;
