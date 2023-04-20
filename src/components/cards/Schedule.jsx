import React from "react";

import { MdKeyboardArrowRight } from "react-icons/md";

const Schedule = () => {
  return (
    <>
      <div className="w-5/12 bg-white p-5 rounded-xl max-md:w-full">
        <div className="title flex flex-row justify-between items-center">
          <p className="font-bold text-sm">Today’s schedule</p>
          <div className="flex flex-row">
            <p className="text-xs">See All</p>
            <MdKeyboardArrowRight className="text-grayOrg" />
          </div>
        </div>
        <div className="card mt-5 border-l-4 border-green px-2">
          <p className="text-xs font-bold ">
            Meeting with suppliers from Kuta Bali
          </p>
          <p className="text-xs mt-1">14.00-15.00</p>
          <p className="text-xs mt-1">at Sunset Road, Kuta, Bali </p>
        </div>
        <div className="card mt-2 border-l-4 border-voilet px-2">
          <p className="text-xs font-bold ">
            Check operation at Giga Factory 1
          </p>
          <p className="text-xs  mt-1">18.00-20.00</p>
          <p className="text-xs  mt-1">at Central Jakarta </p>
        </div>
      </div>
    </>
  );
};

export default Schedule;
