import React from "react";
import { VictoryPie } from "victory-pie";

const myData = [{ y: 14 }, { y: 31 }, { y: 55 }];

const PiChart = () => {
  return (
    <VictoryPie
      data={myData}
      colorScale={["#EE8484", "#F6DC7D", "#9BDD7C"]}
      radius={100}
    />
  );
};

export default PiChart;
