import React from "react";
import P1 from "../assets/clients/sp1.png";
import P2 from "../assets/clients/sp2.png";
import P3 from "../assets/clients/sp3.png";
import P4 from "../assets/clients/sp4.png";
import P5 from "../assets/clients/sp5.png";
import P6 from "../assets/clients/sp6.png";
import P7 from "../assets/clients/sp7.png";
import P8 from "../assets/clients/sp8.png";
import P9 from "../assets/clients/sp9.png";
import P10 from "../assets/clients/sp10.png";
import P11 from "../assets/clients/sp11.png";
import P12 from "../assets/clients/sp12.png";
import P13 from "../assets/clients/sp13.png";
import P14 from "../assets/clients/sp14.png";

import { motion } from "framer-motion";
import { PopUp } from "./animation";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { settings } from "./Settings";

const Partners = () => {
  return (
    <motion.div
      className="py-[30px] border-t-2 border-violet-600/50"
      initial={"offscreen"}
      whileInView={"onscreen"}
      transition={{ staggerChildren: 0.2 }}
      viewport={{ once: false, amount: 0.5 }}
    >
      <h2 className="title w-full text-center mt-12">Partners</h2>
      <motion.div
        variants={PopUp}
        className="max-w-[1080px] mx-12 xl:mx-auto my-20"
        id="partners"
      >
        <Slider {...settings}>
          <a
            href="https://twitter.com/axbesportsguild"
            target="_blank"
            className="!flex justify-center"
          >
            <img src={P1} className="w-[60px] " alt="" />
          </a>
          <a
            href="https://twitter.com/whitelist_group"
            target="_blank"
            className="!flex justify-center"
          >
            <img src={P2} className="w-[60px] " alt="" />
          </a>
          <a
            href="https://atlanteanvc.com"
            target="_blank"
            className="!flex justify-center"
          >
            <img src={P3} className="w-[60px] " alt="" />
          </a>
          <a
            href="https://liquidifty.io"
            target="_blank"
            className="!flex justify-center"
          >
            <img src={P4} className="w-[60px] " alt="" />
          </a>
          <a
            href="https://twitter.com/vendilgaming?lang=en"
            className="!flex justify-center"
            target="_blank"
          >
            <img src={P5} className="w-[60px] " alt="" />
          </a>
          <a
            href="https://www.goinfluencer.io"
            className="!flex justify-center"
            target="_blank"
          >
            <img src={P6} className="w-[60px] " alt="" />
          </a>
          <a
            href="https://twitter.com/MTTGamingGuild"
            className="!flex justify-center"
            target="_blank"
          >
            <img src={P7} className="w-[60px] " alt="" />
          </a>
          <a
            href="https://twitter.com/breed_fi"
            className="!flex justify-center"
            target="_blank"
          >
            <img src={P8} className="w-[60px] " alt="" />
          </a>
          <a
            href="https://twitter.com/AsgardMetaguild"
            className="!flex justify-center"
            target="_blank"
          >
            <img src={P9} className="w-[60px] " alt="" />
          </a>
          <a
            href="https://www.facebook.com/CabronMetaGames"
            className="!flex justify-center"
            target="_blank"
          >
            <img src={P10} className="w-[60px] " alt="" />
          </a>
          <a
            href="https://govventures.net/"
            className="!flex justify-center"
            target="_blank"
          >
            <img src={P11} className="w-[60px] " alt="" />
          </a>
          <a
            href="https://twitter.com/hot_capital"
            className="!flex justify-center"
            target="_blank"
          >
            <img src={P12} className="w-[60px] " alt="" />
          </a>
          <a
            href="https://www.insertstonks.io"
            className="!flex justify-center"
            target="_blank"
          >
            <img src={P13} className="w-[60px] " alt="" />
          </a>
          <a
            href="https://gotbit.io/"
            className="!flex justify-center"
            target="_blank"
          >
            <img src={P14} className="w-[60px] " alt="" />
          </a>
        </Slider>
      </motion.div>
    </motion.div>
  );
};

export default Partners;
