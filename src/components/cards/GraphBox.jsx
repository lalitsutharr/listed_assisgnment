import React from "react";

import { BsFillCircleFill } from "react-icons/bs";
import Graph from "../graphs/Graph";

const GraphBox = () => {
  return (
    <>
      <div className="mt-5 bg-white p-5 rounded-xl max-md:w-full">
        <div className="flex flex-row justify-between">
          <div className="w-2/12">
            <p className="font-bold text-lg">Activities</p>
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
          <div className="flex flex-row w-3/12 justify-around">
            <div className="flex flex-row items-center">
              <BsFillCircleFill className="text-liteRed" />
              <p className="text-xs ml-2">Guest</p>
            </div>
            <div className="flex flex-row items-center">
              <BsFillCircleFill className="text-liteGreen" />
              <p className="text-xs ml-2">User</p>
            </div>
          </div>
        </div>
        <Graph />
      </div>
    </>
  );
};

export default GraphBox;
