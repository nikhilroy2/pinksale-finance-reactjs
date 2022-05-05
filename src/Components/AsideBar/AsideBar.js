import React, { useState, useEffect } from "react";
import "./AsideBar.css";
function AsideBar(props) {
  // const aside_object = [

  //     {
  //         id: 1,
  //         name: 'Home',
  //         icon: '',

  //     }
  // ]

  // Launchpads handle

  const [isLaunchpadsDropdown, setIsLaunchpadsDropdown] = useState(false);

  // PinkPad Dropdown
  const [isPinkPadDropdown, setPinkPadDropdown] = useState(false);

  // PinkLock Dropdown
  const [isPinkLockDropdown, setPinkLockDropdown] = useState(false);

  // PinkAirdrop
  const [isPinkAirdropDropdown, setPinkAirdropDropdown] = useState(false);

  // .......... theme controling

  const [IsDark, setIsDark] = useState(false);
  useEffect(() => {
    if (IsDark) {
      document.documentElement.classList.add("dark_theme_body");
    } else {
      document.documentElement.classList.remove("dark_theme_body");
    }
  }, [IsDark]);
  return (
    <aside id="AsideBar">
      <div className="wrapper">
        <ul className="aside_list">
          <li className="aside_list_item">
            <a href="#" className="aside_list_action">
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth={0}
                viewBox="0 0 1024 1024"
                className="ant-menu-item-icon"
                height={18}
                width={18}
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M946.5 505L560.1 118.8l-25.9-25.9a31.5 31.5 0 0 0-44.4 0L77.5 505a63.9 63.9 0 0 0-18.8 46c.4 35.2 29.7 63.3 64.9 63.3h42.5V940h691.8V614.3h43.4c17.1 0 33.2-6.7 45.3-18.8a63.6 63.6 0 0 0 18.7-45.3c0-17-6.7-33.1-18.8-45.2zM568 868H456V664h112v204zm217.9-325.7V868H632V640c0-22.1-17.9-40-40-40H432c-22.1 0-40 17.9-40 40v228H238.1V542.3h-96l370-369.7 23.1 23.1L882 542.3h-96.1z" />
              </svg>
              Home
            </a>
          </li>

          <li className="aside_list_item">
            <button
              className="aside_list_action"
              onClick={() => setIsLaunchpadsDropdown(!isLaunchpadsDropdown)}
            >
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth={0}
                viewBox="0 0 1024 1024"
                className="ant-menu-item-icon"
                height={18}
                width={18}
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M864 736c0-111.6-65.4-208-160-252.9V317.3c0-15.1-5.3-29.7-15.1-41.2L536.5 95.4C530.1 87.8 521 84 512 84s-18.1 3.8-24.5 11.4L335.1 276.1a63.97 63.97 0 0 0-15.1 41.2v165.8C225.4 528 160 624.4 160 736h156.5c-2.3 7.2-3.5 15-3.5 23.8 0 22.1 7.6 43.7 21.4 60.8a97.2 97.2 0 0 0 43.1 30.6c23.1 54 75.6 88.8 134.5 88.8 29.1 0 57.3-8.6 81.4-24.8 23.6-15.8 41.9-37.9 53-64a97 97 0 0 0 43.1-30.5 97.52 97.52 0 0 0 21.4-60.8c0-8.4-1.1-16.4-3.1-23.8H864zM762.3 621.4c9.4 14.6 17 30.3 22.5 46.6H700V558.7a211.6 211.6 0 0 1 62.3 62.7zM388 483.1V318.8l124-147 124 147V668H388V483.1zM239.2 668c5.5-16.3 13.1-32 22.5-46.6 16.3-25.2 37.5-46.5 62.3-62.7V668h-84.8zm388.9 116.2c-5.2 3-11.2 4.2-17.1 3.4l-19.5-2.4-2.8 19.4c-5.4 37.9-38.4 66.5-76.7 66.5-38.3 0-71.3-28.6-76.7-66.5l-2.8-19.5-19.5 2.5a27.7 27.7 0 0 1-17.1-3.5c-8.7-5-14.1-14.3-14.1-24.4 0-10.6 5.9-19.4 14.6-23.8h231.3c8.8 4.5 14.6 13.3 14.6 23.8-.1 10.2-5.5 19.6-14.2 24.5zM464 400a48 48 0 1 0 96 0 48 48 0 1 0-96 0z" />
              </svg>
              Launchpads
            </button>
            <i
              className={`fa-solid fa-angle-down ${
                isLaunchpadsDropdown ? "active_icon" : ""
              }`}
            ></i>
            <div className="dropdown_list"></div>
          </li>

          <li className="aside_list_item">
            <button
              className="aside_list_action"
              onClick={() => setPinkPadDropdown(!isPinkPadDropdown)}
            >
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth={0}
                viewBox="0 0 1024 1024"
                className="ant-menu-item-icon"
                height={18}
                width={18}
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M864 736c0-111.6-65.4-208-160-252.9V317.3c0-15.1-5.3-29.7-15.1-41.2L536.5 95.4C530.1 87.8 521 84 512 84s-18.1 3.8-24.5 11.4L335.1 276.1a63.97 63.97 0 0 0-15.1 41.2v165.8C225.4 528 160 624.4 160 736h156.5c-2.3 7.2-3.5 15-3.5 23.8 0 22.1 7.6 43.7 21.4 60.8a97.2 97.2 0 0 0 43.1 30.6c23.1 54 75.6 88.8 134.5 88.8 29.1 0 57.3-8.6 81.4-24.8 23.6-15.8 41.9-37.9 53-64a97 97 0 0 0 43.1-30.5 97.52 97.52 0 0 0 21.4-60.8c0-8.4-1.1-16.4-3.1-23.8H864zM762.3 621.4c9.4 14.6 17 30.3 22.5 46.6H700V558.7a211.6 211.6 0 0 1 62.3 62.7zM388 483.1V318.8l124-147 124 147V668H388V483.1zM239.2 668c5.5-16.3 13.1-32 22.5-46.6 16.3-25.2 37.5-46.5 62.3-62.7V668h-84.8zm388.9 116.2c-5.2 3-11.2 4.2-17.1 3.4l-19.5-2.4-2.8 19.4c-5.4 37.9-38.4 66.5-76.7 66.5-38.3 0-71.3-28.6-76.7-66.5l-2.8-19.5-19.5 2.5a27.7 27.7 0 0 1-17.1-3.5c-8.7-5-14.1-14.3-14.1-24.4 0-10.6 5.9-19.4 14.6-23.8h231.3c8.8 4.5 14.6 13.3 14.6 23.8-.1 10.2-5.5 19.6-14.2 24.5zM464 400a48 48 0 1 0 96 0 48 48 0 1 0-96 0z" />
              </svg>
              PinkPad
            </button>
            <i
              className={`fa-solid fa-angle-down ${
                isPinkPadDropdown ? "active_icon" : ""
              }`}
            ></i>
            <div className="dropdown_list"></div>
          </li>
          <li className="aside_list_item">
            <button
              className="aside_list_action"
              onClick={() => setPinkLockDropdown(!isPinkLockDropdown)}
            >
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth={0}
                viewBox="0 0 1024 1024"
                className="ant-menu-item-icon"
                height={18}
                width={18}
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M864 736c0-111.6-65.4-208-160-252.9V317.3c0-15.1-5.3-29.7-15.1-41.2L536.5 95.4C530.1 87.8 521 84 512 84s-18.1 3.8-24.5 11.4L335.1 276.1a63.97 63.97 0 0 0-15.1 41.2v165.8C225.4 528 160 624.4 160 736h156.5c-2.3 7.2-3.5 15-3.5 23.8 0 22.1 7.6 43.7 21.4 60.8a97.2 97.2 0 0 0 43.1 30.6c23.1 54 75.6 88.8 134.5 88.8 29.1 0 57.3-8.6 81.4-24.8 23.6-15.8 41.9-37.9 53-64a97 97 0 0 0 43.1-30.5 97.52 97.52 0 0 0 21.4-60.8c0-8.4-1.1-16.4-3.1-23.8H864zM762.3 621.4c9.4 14.6 17 30.3 22.5 46.6H700V558.7a211.6 211.6 0 0 1 62.3 62.7zM388 483.1V318.8l124-147 124 147V668H388V483.1zM239.2 668c5.5-16.3 13.1-32 22.5-46.6 16.3-25.2 37.5-46.5 62.3-62.7V668h-84.8zm388.9 116.2c-5.2 3-11.2 4.2-17.1 3.4l-19.5-2.4-2.8 19.4c-5.4 37.9-38.4 66.5-76.7 66.5-38.3 0-71.3-28.6-76.7-66.5l-2.8-19.5-19.5 2.5a27.7 27.7 0 0 1-17.1-3.5c-8.7-5-14.1-14.3-14.1-24.4 0-10.6 5.9-19.4 14.6-23.8h231.3c8.8 4.5 14.6 13.3 14.6 23.8-.1 10.2-5.5 19.6-14.2 24.5zM464 400a48 48 0 1 0 96 0 48 48 0 1 0-96 0z" />
              </svg>
              PinkLock
            </button>
            <i
              className={`fa-solid fa-angle-down ${
                isPinkLockDropdown ? "active_icon" : ""
              }`}
            ></i>
            <div className="dropdown_list"></div>
          </li>

          <li className="aside_list_item">
            <button
              className="aside_list_action"
              onClick={() => setPinkAirdropDropdown(!isPinkAirdropDropdown)}
            >
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth={0}
                viewBox="0 0 1024 1024"
                className="ant-menu-item-icon"
                height={18}
                width={18}
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M864 736c0-111.6-65.4-208-160-252.9V317.3c0-15.1-5.3-29.7-15.1-41.2L536.5 95.4C530.1 87.8 521 84 512 84s-18.1 3.8-24.5 11.4L335.1 276.1a63.97 63.97 0 0 0-15.1 41.2v165.8C225.4 528 160 624.4 160 736h156.5c-2.3 7.2-3.5 15-3.5 23.8 0 22.1 7.6 43.7 21.4 60.8a97.2 97.2 0 0 0 43.1 30.6c23.1 54 75.6 88.8 134.5 88.8 29.1 0 57.3-8.6 81.4-24.8 23.6-15.8 41.9-37.9 53-64a97 97 0 0 0 43.1-30.5 97.52 97.52 0 0 0 21.4-60.8c0-8.4-1.1-16.4-3.1-23.8H864zM762.3 621.4c9.4 14.6 17 30.3 22.5 46.6H700V558.7a211.6 211.6 0 0 1 62.3 62.7zM388 483.1V318.8l124-147 124 147V668H388V483.1zM239.2 668c5.5-16.3 13.1-32 22.5-46.6 16.3-25.2 37.5-46.5 62.3-62.7V668h-84.8zm388.9 116.2c-5.2 3-11.2 4.2-17.1 3.4l-19.5-2.4-2.8 19.4c-5.4 37.9-38.4 66.5-76.7 66.5-38.3 0-71.3-28.6-76.7-66.5l-2.8-19.5-19.5 2.5a27.7 27.7 0 0 1-17.1-3.5c-8.7-5-14.1-14.3-14.1-24.4 0-10.6 5.9-19.4 14.6-23.8h231.3c8.8 4.5 14.6 13.3 14.6 23.8-.1 10.2-5.5 19.6-14.2 24.5zM464 400a48 48 0 1 0 96 0 48 48 0 1 0-96 0z" />
              </svg>
              Pink Airdrop
            </button>
            <i
              className={`fa-solid fa-angle-down ${
                isPinkAirdropDropdown ? "active_icon" : ""
              }`}
            ></i>
            <div className="dropdown_list"></div>
          </li>

          <li className="aside_list_item">
            <a href="#" className="aside_list_action">
              {" "}
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth={0}
                viewBox="0 0 1024 1024"
                className="ant-menu-item-icon"
                height={18}
                width={18}
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M899.6 276.5L705 396.4 518.4 147.5a8.06 8.06 0 0 0-12.9 0L319 396.4 124.3 276.5c-5.7-3.5-13.1 1.2-12.2 7.9L188.5 865c1.1 7.9 7.9 14 16 14h615.1c8 0 14.9-6 15.9-14l76.4-580.6c.8-6.7-6.5-11.4-12.3-7.9zm-126 534.1H250.3l-53.8-409.4 139.8 86.1L512 252.9l175.7 234.4 139.8-86.1-53.9 409.4zM512 509c-62.1 0-112.6 50.5-112.6 112.6S449.9 734.2 512 734.2s112.6-50.5 112.6-112.6S574.1 509 512 509zm0 160.9c-26.6 0-48.2-21.6-48.2-48.3 0-26.6 21.6-48.3 48.2-48.3s48.2 21.6 48.2 48.3c0 26.6-21.6 48.3-48.2 48.3z" />
              </svg>{" "}
              Leaderboard
            </a>
          </li>

          <li className="aside_list_item">
            <a href="#" className="aside_list_action">
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth={0}
                viewBox="0 0 24 24"
                className="ant-menu-item-icon"
                height={18}
                width={18}
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M20.995,6.9c-0.034-0.342-0.241-0.642-0.548-0.795l-8-4c-0.281-0.141-0.613-0.141-0.895,0l-8,4 C3.246,6.259,3.039,6.559,3.005,6.9c-0.011,0.107-0.961,10.767,8.589,15.014C11.723,21.972,11.861,22,12,22 s0.277-0.028,0.406-0.086C21.956,17.667,21.006,7.008,20.995,6.9z M12,19.897C5.231,16.625,4.911,9.642,4.966,7.635L12,4.118 l7.029,3.515C19.066,9.622,18.701,16.651,12,19.897z" />
                <path d="M11 12.586L8.707 10.293 7.293 11.707 11 15.414 16.707 9.707 15.293 8.293z" />
              </svg>{" "}
              Pink Anti-Bot
            </a>
          </li>

          <li className="aside_list_item">
            <a href="#" className="aside_list_action">
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth={0}
                viewBox="0 0 24 24"
                className="ant-menu-item-icon"
                height={18}
                width={18}
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M21.928,11.607c-0.202-0.488-0.635-0.605-0.928-0.633V8c0-1.103-0.897-2-2-2h-6V4.61c0.305-0.274,0.5-0.668,0.5-1.11 C13.5,2.672,12.828,2,12,2s-1.5,0.672-1.5,1.5c0,0.442,0.195,0.836,0.5,1.11V6H5C3.897,6,3,6.897,3,8v2.997 C2.951,11,2.918,11.003,2.918,11.003C2.395,11.04,1.99,11.476,1.99,12v2c0,0.553,0.447,1,1,1H3v5c0,1.103,0.897,2,2,2h14 c1.103,0,2-0.897,2-2v-5c0.553,0,1-0.447,1-1v-1.938C22.011,11.909,21.988,11.753,21.928,11.607z M5,20V8h14l0.001,3.996 C19.001,11.998,19,11.999,19,12v2c0,0.002,0.001,0.003,0.001,0.005L19.002,20H5z" />
                <ellipse cx="8.5" cy={12} rx="1.5" ry={2} />
                <ellipse cx="15.5" cy={12} rx="1.5" ry={2} />
                <path d="M8 16H16V18H8z" />
              </svg>{" "}
              Pools Alert
            </a>
          </li>

          <li className="aside_list_item">
            <a href="#" className="aside_list_action">
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 1024 1024"
                className="ant-menu-item-icon"
                height="18"
                width="18"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M296 250c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h384c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8H296zm184 144H296c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h184c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8zm-48 458H208V148h560v320c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8V108c0-17.7-14.3-32-32-32H168c-17.7 0-32 14.3-32 32v784c0 17.7 14.3 32 32 32h264c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm440-88H728v-36.6c46.3-13.8 80-56.6 80-107.4 0-61.9-50.1-112-112-112s-112 50.1-112 112c0 50.7 33.7 93.6 80 107.4V764H520c-8.8 0-16 7.2-16 16v152c0 8.8 7.2 16 16 16h352c8.8 0 16-7.2 16-16V780c0-8.8-7.2-16-16-16zM646 620c0-27.6 22.4-50 50-50s50 22.4 50 50-22.4 50-50 50-50-22.4-50-50zm180 266H566v-60h260v60z"></path>
              </svg>
              KYC & Audit
            </a>
          </li>

          <li className="aside_list_item">
            <a href="#" className="aside_list_action">
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth={0}
                viewBox="0 0 512 512"
                className="ant-menu-item-icon"
                height={18}
                width={18}
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill="none"
                  strokeLinejoin="round"
                  strokeWidth={32}
                  d="M416 221.25V416a48 48 0 01-48 48H144a48 48 0 01-48-48V96a48 48 0 0148-48h98.75a32 32 0 0122.62 9.37l141.26 141.26a32 32 0 019.37 22.62z"
                />
                <path
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={32}
                  d="M256 56v120a32 32 0 0032 32h120m-232 80h160m-160 80h160"
                />
              </svg>{" "}
              Docs
            </a>
          </li>

          <li className="aside_list_item">
            <a href="#" className="aside_list_action">
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth={0}
                viewBox="0 0 24 24"
                className="ant-menu-item-icon"
                height={18}
                width={18}
                xmlns="http://www.w3.org/2000/svg"
              >
                <g>
                  <path fill="none" d="M0 0h24v24H0z" />
                  <path
                    fillRule="nonzero"
                    d="M12 20a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm0 2C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm-3.11-8.83l-2.498-.779c-.54-.165-.543-.537.121-.804l9.733-3.76c.565-.23.885.061.702.79l-1.657 7.82c-.116.557-.451.69-.916.433l-2.551-1.888-1.189 1.148c-.122.118-.221.219-.409.244-.187.026-.341-.03-.454-.34l-.87-2.871-.012.008z"
                  />
                </g>
              </svg>
              Telegram
            </a>
          </li>

          <li className="aside_list_item">
            <a href="#" className="aside_list_action">
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth={0}
                viewBox="0 0 24 24"
                className="ant-menu-item-icon"
                height={18}
                width={18}
                xmlns="http://www.w3.org/2000/svg"
              >
                <g>
                  <path fill="none" d="M0 0h24v24H0z" />
                  <path
                    fillRule="nonzero"
                    d="M15.3 5.55a2.9 2.9 0 0 0-2.9 2.847l-.028 1.575a.6.6 0 0 1-.68.583l-1.561-.212c-2.054-.28-4.022-1.226-5.91-2.799-.598 3.31.57 5.603 3.383 7.372l1.747 1.098a.6.6 0 0 1 .034.993L7.793 18.17c.947.059 1.846.017 2.592-.131 4.718-.942 7.855-4.492 7.855-10.348 0-.478-1.012-2.141-2.94-2.141zm-4.9 2.81a4.9 4.9 0 0 1 8.385-3.355c.711-.005 1.316.175 2.669-.645-.335 1.64-.5 2.352-1.214 3.331 0 7.642-4.697 11.358-9.463 12.309-3.268.652-8.02-.419-9.382-1.841.694-.054 3.514-.357 5.144-1.55C5.16 15.7-.329 12.47 3.278 3.786c1.693 1.977 3.41 3.323 5.15 4.037 1.158.475 1.442.465 1.973.538z"
                  />
                </g>
              </svg>
              Twitter
            </a>
          </li>
        </ul>
        <div className="aside_control">
          <div className="flex_box">
            <div className="flex_box_item">
              <a href="#">
                <img
                  style={{ height: "18px" }}
                  src={require("../../Static/img/pinkswap.a95de4f3.png")}
                  alt="img"
                />{" "}
                <span> PINKSALE</span>
              </a>
            </div>
            <div className="flex_box_item">
              <strong>$386.49</strong>
            </div>
          </div>
          <div
            className={`flex_box_theme_control ${
              IsDark ? "dark_theme_enable" : ""
            }`}
          >
            <button className="light_theme" onClick={() => setIsDark(false)}>
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth={0}
                viewBox="0 0 512 512"
                height={20}
                width={20}
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill="none"
                  strokeLinecap="round"
                  strokeMiterlimit={10}
                  strokeWidth={32}
                  d="M256 48v48m0 320v48m147.08-355.08l-33.94 33.94M142.86 369.14l-33.94 33.94M464 256h-48m-320 0H48m355.08 147.08l-33.94-33.94M142.86 142.86l-33.94-33.94"
                />
                <circle
                  cx={256}
                  cy={256}
                  r={80}
                  fill="none"
                  strokeLinecap="round"
                  strokeMiterlimit={10}
                  strokeWidth={32}
                />
              </svg>
            </button>
            /
            <button className="dark_theme" onClick={() => setIsDark(true)}>
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth={0}
                viewBox="0 0 512 512"
                height={18}
                width={18}
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={32}
                  d="M160 136c0-30.62 4.51-61.61 16-88C99.57 81.27 48 159.32 48 248c0 119.29 96.71 216 216 216 88.68 0 166.73-51.57 200-128-26.39 11.49-57.38 16-88 16-119.29 0-216-96.71-216-216z"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </aside>
  );
}

export default AsideBar;
