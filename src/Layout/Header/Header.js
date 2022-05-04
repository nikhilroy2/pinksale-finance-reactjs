import React, { useState } from "react";
import "./Header.css";

import AsideBar from "../../Components/AsideBar/AsideBar";

function Header(props) {
  const [isToggle, setIsToggle] = useState(true);

  return (
    <header id="Header">
      {/* Nav bar below */}
      <nav id="HeaderNav">
        <div className="left_side">
          <button className="toggle_btn" onClick={() => setIsToggle(!isToggle)}>
            {isToggle ? (
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
            ) : (
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth={0}
                viewBox="0 0 1024 1024"
                height="24px"
                width="24px"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M904 160H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8zm0 624H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8zm0-312H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8z" />
              </svg>
            )}
          </button>

          <a href="#" className="logo_link">
            <img
              style={{ height: "36px" }}
              src={require("../../Static/img/pinkswap.a95de4f3.png")}
              alt="img"
            />
            PinkSale
          </a>
        </div>

        <div className="right_side">
          <div className="btn_box">
            <button className="nav_btn">
              {" "}
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth={0}
                t={1551322312294}
                viewBox="0 0 1024 1024"
                version="1.1"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs />
                <path d="M474 152m8 0l60 0q8 0 8 8l0 704q0 8-8 8l-60 0q-8 0-8-8l0-704q0-8 8-8Z" />
                <path d="M168 474m8 0l672 0q8 0 8 8l0 60q0 8-8 8l-672 0q-8 0-8-8l0-60q0-8 8-8Z" />
              </svg>{" "}
              Create
            </button>
          </div>
          <div className="btn_box">
            <button className="nav_btn nav_btn_light">
              <img width={18}
                src={require("../../Static/img/ic-bsc.419dfaf2.png")}
                alt="img"
              />
              BSC MAINNET
            </button>
          </div>
          <div className="btn_box">
            <button className="nav_btn">Connect</button>
          </div>
        </div>
      </nav>

      {/* Aside bar below */}

      <AsideBar></AsideBar>
    </header>
  );
}

export default Header;
