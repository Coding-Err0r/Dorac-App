import React from "react";
import { AiFillCloud, AiOutlineTwitter } from "react-icons/ai";
import { GrLinkedinOption } from "react-icons/gr";

const MembersCard = ({ data }) => {
  const { dp, name, title } = data;
  return (
    <div className="rounded-lg rounded-br-[30px] overflow-hidden min-w-[300px] mx-4 bg-violet-500/20 hover:bg-violet-800 duration-300">
      <img src={dp} className="w-[200px] h-[200px] object-cover rounded-full mx-auto mt-4" alt="" />
      <div className="text-gray-100 text-center ">
        <h3 className="mt-4 text-teal-500 uppercase">{name}</h3>
        <p className="py-2">{title}</p>
        <div className="w-full text-[24px] flex gap-4 items-center justify-center pb-6">
          {data?.twitter && (
            <a href={data.twitter} target="_blank">
              <AiOutlineTwitter />
            </a>
          )}

          {data?.linkdin && (
            <a href={data.linkdin} target="_blank">
              <GrLinkedinOption />
            </a>
          )}

          {data?.cloud && (
            <a href={data.cloud} target="_blank">
              <AiFillCloud />
            </a>
          )}

          {data?.web && (
            <a href={data.web} target="_blank">
              <AiFillCloud />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default MembersCard;
