import React, { useState } from "react";
import Doughnuts from "./Doughnuts";

const CarusolCard = ({ data }) => {
  const { image, title, para } = data;
  return (
    <div className="lg:p-12 lg:mx-32">
      {image === "" ? (
        <div className="w-full xl:min-h-[400px]">
          <div className="w-full text-center xl:pt-[100px]">
            <h2 className="text-white">{title}</h2>
            <p className="max-w-[720px] mt-4 text-gray-300 mx-auto">{para}</p>
          </div>
        </div>
      ) : (
        <div className="grid md:grid-cols-7 gap-6">
          <div className="md:col-span-4 flex flex-col justify-center">
            <h2 className="text-white">{title}</h2>
            <p className="para max-w-[720px] mt-4 leading-7">{para}</p>
          </div>
          <div className="md:col-span-3">
            <Doughnuts />
          </div>
        </div>
      )}
    </div>
  );
};

export default CarusolCard;
