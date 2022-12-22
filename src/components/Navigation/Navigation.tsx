import React from "react";
import style from "./Navigation.module.scss";
import "./Navigation.module.scss";
import { Navigation as NavType } from "./Navigation.types";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  const navs: Array<NavType> = [
    { name: "top stories", route: "/" },
    { name: "latest stories", route: "/latest-stories" },
    { name: "best stories", route: "#" },
  ];
  return (
    <header>
      <h1>Hacker News Clone</h1>
      <nav>
        <ul>
          {navs?.map((item) => (
            <li key={item.name}>
              <a
                className={style["nav-link active"]}
                href={item.route}
                style={{ color: "inherit", textDecoration: "none" }}
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Navigation;
