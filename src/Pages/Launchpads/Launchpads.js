import React from "react";
import "./Launchpads.css";
import PresaleEnd from "../../Components/PresaleEnd/PresaleEnd";
import FipiPresale from "../../Components/FipiPresale/FipiPresale";

import TokenMetrics from "../../Components/TokenMetrics/TokenMetrics";


function Launchpads(props) {
  window.document.title = "PinkSale - The Launchpad Protocol for Everyone!";
  return (
    <div id="Launchpads">
      <section>
        <div className="section_wrapper flex_section">
          <div className="section_lg_grow">
            <FipiPresale></FipiPresale>
            <TokenMetrics></TokenMetrics>
          </div>
          <div className="section_sm_item">
            <PresaleEnd></PresaleEnd>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Launchpads;
