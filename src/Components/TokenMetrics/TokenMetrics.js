import React from "react";

import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import "./TokenMetrics.css";

ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
  labels: ["Presale", "Liquidity", "Yellow"],
  datasets: [
    {
      label: "Token Metrics",
      data: [47.93035, 24.444479, 27.625171],
      backgroundColor: ["#FD728F", "#049BFF", "#FFCD56"],
      borderColor: ["#FD728F", "#049BFF", "#FFCD56"],
      borderWidth: 1,
    },
  ],
};

function TokenMetrics(props) {
  const options = {
    plugins: {
      legend: {
        position: "right",
      },
    },
  };
  return (
    <div id="TokenMetrics">
      <div className="wrapper">
        <div className="wrapper_title">
          <h3>Token Metrics</h3>
        </div>
        <div className="wrapper_body">
          <div className="canvas_wrapper">
            <Doughnut data={data} options={options} />
            <div className="canvas_text">URF</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TokenMetrics;
