import { motion } from "framer-motion";
import React from "react";
import { Rotate } from "./animation";

const Merch = () => {
  return (
    <motion.div
      className="max-w-full flex items-center justify-center mt-20 mb-20"
      initial={"offscreen"}
      whileInView={"onscreen"}
      transition={{ staggerChildren: 0.2 }}
      viewport={{ once: false, amount: 0.5 }}
    >
      <motion.div className="max-w-[700px]">
        <h2 className="title mt-[40px] w-full text-center mb-12">MERCH</h2>
        <motion.div variants={Rotate}>
          <a
            href="https://dogeraceofficial.myshopify.com/"
            target="_blank"
            className="bg-violet-500 py-3 px-6 rounded-md text-white"
          >
            Shopify Merchant
          </a>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Merch;
