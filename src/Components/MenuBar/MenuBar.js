import React from "react";
import "./MenuBar.css";

function MenuBar(props) {
  const menu_list_object = [
    {
      id: 1,
      link: "#",
      name: "ASUNA",
    },
    {
      id: 2,
      link: "#",
      name: "GYM",
    },
    {
      id: 3,
      link: "#",
      name: "COES",
    },
    {
      id: 4,
      link: "#",
      name: "LOCKPAY",
    },
    {
      id: 5,
      link: "#",
      name: "DAH",
    },
    {
      id: 6,
      link: "#",
      name: "MTO",
    },
    {
      id: 7,
      link: "#",
      name: "ZONX",
    },
    {
      id: 8,
      link: "#",
      name: "MTO",
    },
    {
      id: 9,
      link: "#",
      name: "BCF",
    },
    {
      id: 10,
      link: "#",
      name: "BCF",
    },
    {
      id: 11,
      link: "#",
      name: "COMPINU",
    },
    {
      id: 12,
      link: "#",
      name: "SELO",
    },
    {
      id: 13,
      link: "#",
      name: "VLF",
    },
    {
      id: 14,
      link: "#",
      name: "Drovers",
    },
  ];
  return (
    <menu>
      <div id="MenuBar">
        <ul className="menubar_list">
          <li>
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth={0}
              viewBox="0 0 512 512"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={32}
                d="M352 144h112v112"
              />
              <path
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={32}
                d="M48 368l121.37-121.37a32 32 0 0145.26 0l50.74 50.74a32 32 0 0045.26 0L448 160"
              />
            </svg>
            Trending
          </li>
          {menu_list_object.map((v) => {
            return (
              <li key={v.id}>
                <a href={v.link}>
                  #{v.id} <span className="name">{v.name}</span>
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </menu>
  );
}

export default MenuBar;
