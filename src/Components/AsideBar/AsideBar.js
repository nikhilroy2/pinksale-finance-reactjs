import React from "react";
import "./AsideBar.css";
function AsideBar(props) {
  // const aside_object = [

  //     {
  //         id: 1,
  //         name: 'Home',
  //         icon: '',

  //     }
  // ]
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
                <path d="M864 736c0-111.6-65.4-208-160-252.9V317.3c0-15.1-5.3-29.7-15.1-41.2L536.5 95.4C530.1 87.8 521 84 512 84s-18.1 3.8-24.5 11.4L335.1 276.1a63.97 63.97 0 0 0-15.1 41.2v165.8C225.4 528 160 624.4 160 736h156.5c-2.3 7.2-3.5 15-3.5 23.8 0 22.1 7.6 43.7 21.4 60.8a97.2 97.2 0 0 0 43.1 30.6c23.1 54 75.6 88.8 134.5 88.8 29.1 0 57.3-8.6 81.4-24.8 23.6-15.8 41.9-37.9 53-64a97 97 0 0 0 43.1-30.5 97.52 97.52 0 0 0 21.4-60.8c0-8.4-1.1-16.4-3.1-23.8H864zM762.3 621.4c9.4 14.6 17 30.3 22.5 46.6H700V558.7a211.6 211.6 0 0 1 62.3 62.7zM388 483.1V318.8l124-147 124 147V668H388V483.1zM239.2 668c5.5-16.3 13.1-32 22.5-46.6 16.3-25.2 37.5-46.5 62.3-62.7V668h-84.8zm388.9 116.2c-5.2 3-11.2 4.2-17.1 3.4l-19.5-2.4-2.8 19.4c-5.4 37.9-38.4 66.5-76.7 66.5-38.3 0-71.3-28.6-76.7-66.5l-2.8-19.5-19.5 2.5a27.7 27.7 0 0 1-17.1-3.5c-8.7-5-14.1-14.3-14.1-24.4 0-10.6 5.9-19.4 14.6-23.8h231.3c8.8 4.5 14.6 13.3 14.6 23.8-.1 10.2-5.5 19.6-14.2 24.5zM464 400a48 48 0 1 0 96 0 48 48 0 1 0-96 0z" />
              </svg>
              Launchpads
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
                <path d="M20.995,6.903c-0.033-0.342-0.239-0.643-0.547-0.797l-7.973-4c-0.281-0.143-0.613-0.142-0.895-0.002l-8.027,4 C3.256,6.254,3.051,6.541,3.009,6.871c-0.013,0.097-1.145,9.741,8.541,15.008C11.698,21.96,11.863,22,12.027,22 c0.17,0,0.34-0.043,0.492-0.13C21.826,16.611,21.033,7.297,20.995,6.903z M12.018,19.847c-6.86-4.01-7.14-10.352-7.063-12.205 l7.071-3.523l6.998,3.511C19.029,9.5,18.543,15.873,12.018,19.847z" />
              </svg>
              PinkPad
            </a>
          </li>

          <li className="aside_list_item">
            <a href="#" className="aside_list_action">
              Create PinkPad
            </a>
          </li>

          <li className="aside_list_item">
            <a href="#" className="aside_list_action">
              PinkPad List
            </a>
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
                <path d="M832 464H332V240c0-30.9 25.1-56 56-56h248c30.9 0 56 25.1 56 56v68c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-68c0-70.7-57.3-128-128-128H388c-70.7 0-128 57.3-128 128v224h-68c-17.7 0-32 14.3-32 32v384c0 17.7 14.3 32 32 32h640c17.7 0 32-14.3 32-32V496c0-17.7-14.3-32-32-32zm-40 376H232V536h560v304zM484 701v53c0 4.4 3.6 8 8 8h40c4.4 0 8-3.6 8-8v-53a48.01 48.01 0 1 0-56 0z" />
              </svg>
              PinkLock
            </a>
          </li>

          <li className="aside_list_item">
            <a href="#" className="aside_list_action">
              Create Lock
            </a>
          </li>

          <li className="aside_list_item">
            <a href="#" className="aside_list_action">
              Token
            </a>
          </li>

          <li className="aside_list_item">
            <a href="#" className="aside_list_action">
              Liquidity
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
                <path d="M247 25.332c-.642.046-1.288.098-1.936.152-28.244 52.446-31.912 108.59-28.084 167.936 3.77 58.42 14.916 119.542 15.936 181.58h46.168c1.02-62.038 12.167-123.16 15.936-181.58 3.828-59.347.16-115.49-28.084-167.936-.648-.054-1.294-.106-1.936-.152V352h-18V25.332zm-23.795 3.51c-7.21 1.567-14.562 3.595-21.893 6.04l-2.398 2.88c-38.992 46.79-49.743 83.613-45.955 123.384 3.787 39.772 23.27 83.214 47.31 139.31l4.45 11.458c.898 3.188 4.327 9.14 7.594 15.463-3.76-44.326-10.457-88.814-13.294-132.797-3.65-56.57-.748-112.657 24.185-165.738zm65.59 0c24.933 53.08 27.835 109.168 24.185 165.738-2.837 43.983-9.534 88.47-13.294 132.797 3.267-6.324 6.696-12.275 7.595-15.463l4.45-11.46c24.04-56.094 43.523-99.536 47.31-139.308 3.79-39.77-6.962-76.593-45.954-123.384l-2.4-2.88c-7.33-2.445-14.682-4.473-21.89-6.04zM167.5 49.422c-3.667 1.97-7.256 4.04-10.73 6.21C126.256 74.705 105 100.5 105 128c0 61.75 22.053 90.394 49.773 122.074 2.808 3.21 5.702 6.47 8.608 9.76-14.478-34.99-25.395-66.073-28.34-96.98-3.537-37.152 5.253-73.565 32.46-113.432zm177 0c27.207 39.867 35.997 76.28 32.46 113.432-2.945 30.907-13.862 61.99-28.34 96.98 2.905-3.29 5.8-6.55 8.607-9.76C384.947 218.394 407 189.75 407 128c0-27.5-21.256-53.296-51.77-72.367-3.474-2.172-7.063-4.24-10.73-6.21zM224 393v37h21.424v-37H224zm42.576 0v37H288v-37h-21.424zM224 448v44h64v-44h-64z" />
              </svg>
              Pink Airdrop
            </a>
          </li>

          <li className="aside_list_item">
            <a href="#" className="aside_list_action">
              Create Airdrop
            </a>
          </li>

          <li className="aside_list_item">
            <a href="#" className="aside_list_action">
              {" "}
              Airdrop List
            </a>
          </li>

          <li className="aside_list_item">
            <a href="#" className="aside_list_action">
              {" "}
              Leaderboard
            </a>
          </li>

          <li className="aside_list_item">
            <a href="#" className="aside_list_action">
              Pink Anti-Bot
            </a>
          </li>

          <li className="aside_list_item">
            <a href="#" className="aside_list_action">
              Pools Alert
            </a>
          </li>

          <li className="aside_list_item">
            <a href="#" className="aside_list_action">
              Docs
            </a>
          </li>

          <li className="aside_list_item">
            <a href="#" className="aside_list_action">
              Telegram
            </a>
          </li>

          <li className="aside_list_item">
            <a href="#" className="aside_list_action">
              Twitter
            </a>
          </li>
        </ul>
      </div>
    </aside>
  );
}

export default AsideBar;
