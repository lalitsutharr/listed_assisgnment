import React from "react";

import { BiSearch } from "react-icons/bi";
import { BsBell } from "react-icons/bs";

const Navbar = () => {
  return (
    <>
      <div className="flex flex-row justify-between w-full">
        <h1 className="text-2xl font-bold ">Dashboard</h1>
        <div className="flex flex-row justify-between items-center w-4/12 max-lg:w-6/12">
          <div className="search flex flex-row items-center">
            <input
              type="search"
              name=""
              id=""
              placeholder="search"
              className="rounded-lg px-2 py-1 max-sm:hidden max-lg:w-40"
            />
            <BiSearch className="-ml-8 max-md:hidden" />
          </div>
          <BsBell className="h-10 w-5" />
          <img src="./1.png" alt="" className="h-8 rounded-full" />
        </div>
      </div>
    </>
  );
};

export default Navbar;
