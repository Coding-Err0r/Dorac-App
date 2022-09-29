import React, { useState, useEffect } from "react";
import { AiOutlineClose, AiOutlineMenu, AiOutlineMail } from "react-icons/ai";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { BsPersonLinesFill } from "react-icons/bs";

import logo from "../assets/logo.png";
import { NavLinks } from "./Navlinks";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import Social from "./Social";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [shadow, setShadow] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY >= 100 ? setShadow(true) : setShadow(false);
    });
  }, []);

  return (
    <div
      className={
        shadow
          ? "fixed w-full h-[60px] duration-300 z-[100] shadow-lg bg-[#130f14] backdrop-blur-xl"
          : "fixed w-full h-[90px] duration-300 z-[100]"
      }
    >
      <div className=" container mx-auto flex w-full h-full justify-between items-center px-2 2xl:px-16">
        <div>
          <Link to="/#">
            <img
              src={logo}
              className={shadow ? "w-[50px]" : "w-[60px] md:w-[70px]"}
              alt=""
            />
          </Link>
        </div>

        <div className="flex items-center justify-center">
          <ul className="hidden md:flex md:gap-x-3 lg:gap-x-6 mt-5">
            {NavLinks.map((data) => (
              <HashLink to={data.url} key={data.id}>
                <li className="c-link ml-0 mb-6 w-fit text-gray-100 hover:border-b hover:text-cyan-500 duration-300">
                  {data.text}
                </li>
              </HashLink>
            ))}
            <li className="c-link ml-0 mb-6 w-fit text-gray-100 hover:border-b hover:text-cyan-500 duration-300">
              <a
                href="/whitepaper"
                target="_blank"
              >
                Whitepaper
              </a>
            </li>
            <li>
              <a href="#">
                <button className="py-2 px-6 bg-violet-600 text-white rounded-lg hover:bg-violet-700 duration-300 -mt-2">
                  Marketplace
                </button>
              </a>
            </li>
          </ul>
          <div
            onClick={handleNav}
            className="md:hidden text-white cursor-pointer"
          >
            <AiOutlineMenu size={25} />
          </div>
        </div>
      </div>

      <div
        onClick={handleNav}
        className={
          nav ? "fixed left-0 top-0 w-full h-screen bg-black/70 md:hidden" : ""
        }
      >
        <div
          className={
            nav
              ? "fixed h-screen bg-[#130c25] left-0 top-0 w-[80%] p-10 ease-in duration-300"
              : "fixed h-screen left-[-100%] w-[70%] p-10 top-0 ease-in duration-300"
          }
        >
          <div>
            <div className="flex w-full items-center justify-between">
              <div>
                <img src={logo} className="w-[70px]" alt="" />
              </div>
              <div onClick={handleNav} className="c-button">
                <AiOutlineClose />
              </div>
            </div>
            <br />
            <hr />
          </div>

          <div className="h-[70%] py-4 flex flex-col justify-between">
            <ul>
              {NavLinks.map((data) => (
                <HashLink to={data.url} key={data.id}>
                  <li className="c-link ml-0 mb-6 w-fit text-gray-100 hover:border-b hover:text-cyan-500 duration-300">
                    {data.text}
                  </li>
                </HashLink>
              ))}
              <li className="c-link ml-0 mb-6 w-fit text-gray-100 hover:border-b hover:text-cyan-500 duration-300">
                <a
                  href="https://dorac.app/whitepaper/626c73845d4eb45942f0e7dd"
                  target="_blank"
                >
                  Whitepaper
                </a>
              </li>
              <li>
                <a href="#">
                  <button className="py-2 px-6 bg-violet-600 text-white rounded-lg hover:bg-violet-700 duration-300 -mt-2">
                    Marketplace
                  </button>
                </a>
              </li>
            </ul>
            <div>
              <p className="uppercase font-bold tracking-widest text-sky-400">
                Let&apos;s Connect
              </p>
              <br />
              <div className="-ml-5">
                <Social />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
