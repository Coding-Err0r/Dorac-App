import React from "react";
import { BsFillCheckCircleFill } from "react-icons/bs";

const RoadCard = ({ data }) => {
  const { text, id } = data;
  return (
    <div className="min-w-[320px] flex items-center my-6 relative z-10">
      <div className="min-w-[45px] h-[45px] md:w-[50px] md:h-[50px] rounded-full bg-violet-500/40 flex items-center justify-center">
        <span className="w-[35px] h-[35px] bg-violet-600 rounded-full flex items-center justify-center font-bold">
          {id}
        </span>
      </div>
      <div className="w-[20px] md:w-[60px] h-[2px] bg-violet-500"></div>
      <fieldset className="border border-violet-500 py-3 px-6 max-w-[480px] md:min-w-[360px]">
        <legend className="font-bold px-2 text-xl xl:text-2xl">
          Phase {id}
        </legend>
        <ul>
          {text.map((val, index) => (
            <li
              className="flex items-center py-2 xl:py-[10px] text-gray-200 xl:text-xl"
              key={index}
            >
              <span className="text-violet-500 pr-4">
                <BsFillCheckCircleFill />
              </span>
              <span>
                {val.title} {val.status && " - "}
                <span className="text-teal-500">{val?.status}</span>
              </span>
            </li>
          ))}
        </ul>
      </fieldset>
    </div>
  );
};

export default RoadCard;
