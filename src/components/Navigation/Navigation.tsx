import React from "react";
import style from "./Navigation.module.scss";
import "./Navigation.module.scss";
import { Navigation as NavType } from "./Navigation.types";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  const navs: Array<NavType> = [
    { name: "top stories", route: "/" },
    { name: "latest stories", route: "/latest-stories" },
    { name: "best stories", route: "/best-stories" },
  ];
  return (
    <header>
      <h1>Hacker News Clone</h1>
      <nav>
        <ul>
          {navs?.map((item) => (
            <li key={item.name}>
              <NavLink
                className={({ isActive }) =>
                  isActive ? style["active-nav-link"] : style["nav-link"]
                }
                // className={style["nav-link"]}
                to={item.route}
                style={{ color: "inherit", textDecoration: "none" }}
              >
                {item.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Navigation;
