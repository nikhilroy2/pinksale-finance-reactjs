import React from "react";
import "./ConnectModal.css";

function ConnectModal(props) {
  return (
    <div id="ConnectModal" className="modal_open">
      <div className="modal_wrapper">
        <div className="modal_title">
          <h3>Connect to a wallet</h3>
          <button className="close_modal">&#times;</button>
        </div>

        <div className="modal_body">

        </div>
      </div>
    </div>
  );
}

export default ConnectModal;
