import React, { FC } from "react";
import { IMainThemeProps } from "../Types/IMainThemeProps";
import classNames from "classnames";
import "./NavBar.scss";

interface INavBarProps {
  onClick: () => void;
  open: boolean;
}

export const NavBar: FC<IMainThemeProps & INavBarProps> = (props) => {
  return (
    <>
      <nav className={classNames(["nav", { open: props.open }])}>
        <ul className={classNames(["menu-nav", { open: props.open }])}>
          {props.children}
        </ul>
      </nav>
      <div onClick={props.onClick} className="menu-btn">
        <span
          className={classNames(["menu-btn__burger", { open: props.open }])}
        ></span>
      </div>
    </>
  );
};
