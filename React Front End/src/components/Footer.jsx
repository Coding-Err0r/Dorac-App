import React from "react";
import Logo from "../assets/logo.png";
import { NavLinks } from "./Navlinks";
import { HashLink } from "react-router-hash-link";
import { motion } from "framer-motion";
import { Rotate } from "./animation";
import Social from "./Social";

const Footer = () => {
  return (
    <motion.div
      className="w-full bg-violet-800 py-12 overflow-hidden"
      initial={"offscreen"}
      whileInView={"onscreen"}
      transition={{ staggerChildren: 0.2 }}
      viewport={{ once: false, amount: 0.5 }}
    >
      <motion.div variants={Rotate}>
        <img src={Logo} className="mx-auto" alt="" />
      </motion.div>
      <div className="w-fit mx-auto mt-6">
        <Social />
      </div>
      <ul className="max-w-[1080px] text-center mx-auto mt-6 md:flex md:gap-x-3 lg:gap-x-6 items-center justify-center">
        {NavLinks.map((data) => (
          <HashLink to={data.url} key={data.id}>
            <li className="py-2 md:py-0 c-link text-md text-gray-200 hover:text-sky-400 duration-300">
              {data.text}
            </li>
          </HashLink>
        ))}
      </ul>
    </motion.div>
  );
};

export default Footer;
