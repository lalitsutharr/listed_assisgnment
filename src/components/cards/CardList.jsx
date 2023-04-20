import React from "react";
import { cardData } from "../../data/card";

const CardList = () => {
  return (
    <>
      <div className="card-list mt-5 flex flex-row justify-between flex-wrap max-md:justify-center">
        {/* mapping component from cardList data  */}
        {cardData.map((data) => {
          return (
            <>
              <div
                className="car w-52 max-md:w-80 p-5 rounded-xl flex flex-row justify-between max-lg:mt-5"
                style={{ backgroundColor: data.color }}
              >
                <div>
                  <p className="text-sm">{data.title}</p>
                  <p className="text-xl font-bold">{data.numeric}</p>
                </div>
                {data.icon}
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};

export default CardList;
