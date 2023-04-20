import React from "react";
import PiChart from "../graphs/PiChart";

import { BsFillCircleFill } from "react-icons/bs";

const TopProducts = () => {
  return (
    <>
      <div className="w-5/12 bg-white p-5 rounded-xl max-md:w-full">
        <div className="title flex flex-row justify-between">
          <p className="text-sm font-bold">Top Products</p>
          <select
            name="cars"
            id="cars"
            className="border-none bg-white text-xs"
          >
            <option value="1">May - June 2021</option>
            <option value="2">June - July 2021</option>
            <option value="3">July - Aug 2021</option>
            <option value="4">Aug - Sept 2021</option>
          </select>
        </div>
        <div className="h-40 flex flex-row justify-around items-center">
          <PiChart />
          <div className="w-8/12 flex flex-col justify-start">
            <div className="flex flex-col justify-center items-start w-full">
              <div className="flex flex-row items-center">
                <BsFillCircleFill className="text-green" />
                <p className="text-xs ml-1 font-bold">Basic Tree</p>
              </div>
              <p className="text-xs">55%</p>
            </div>
            <div className="flex flex-col justify-center items-start w-full mt-3">
              <div className="flex flex-row items-center">
                <BsFillCircleFill className="text-liteRed" />
                <p className="text-xs ml-1 font-bold">Custom Short Pants</p>
              </div>
              <p className="text-xs">31%</p>
            </div>
            <div className="flex flex-col justify-center items-start w-full mt-3">
              <div className="flex flex-row items-center">
                <BsFillCircleFill className="text-liteOrange" />
                <p className="text-xs ml-1 font-bold">Super Hoodies</p>
              </div>
              <p className="text-xs">14%</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TopProducts;
