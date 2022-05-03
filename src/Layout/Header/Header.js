import React from "react";
import "./Header.css";
function Header(props) {
  return (
    <header id="Header">
      <nav id="HeaderNav">
        <div className="left_side">
          <button className="toggle_btn">
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth={0}
              viewBox="0 0 1024 1024"
              height="24px"
              width="24px"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M408 442h480c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8H408c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8zm-8 204c0 4.4 3.6 8 8 8h480c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8H408c-4.4 0-8 3.6-8 8v56zm504-486H120c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0 632H120c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zM115.4 518.9L271.7 642c5.8 4.6 14.4.5 14.4-6.9V388.9c0-7.4-8.5-11.5-14.4-6.9L115.4 505.1a8.74 8.74 0 0 0 0 13.8z" />
            </svg>
          </button>

          <a href="#" className="logo_link">
            <img
              style={{ height: "43px" }}
              src={require("../../Static/img/pinkswap.a95de4f3.png")}
              alt="img"
            />
            PinkSale
          </a>
        </div>

        <div className="right_side">
          <div className="btn_box">
            <button className="nav_btn">Create</button>
          </div>
          <div className="btn_box">
            <button className="nav_btn">BSC MAINNET</button>
          </div>
          <div className="btn_box">
            <button className="nav_btn">Connect</button>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
