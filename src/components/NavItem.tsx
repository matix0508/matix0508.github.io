import { Link } from "react-router-dom";
import React, { FC } from "react";
import "./NavItem.scss";
import classNames from "classnames";

interface INavItemProps {
  href: string;
  active?: boolean;
  open: boolean;
}

export const NavItem: FC<INavItemProps> = (props) => {
  return (
    <li
      className={classNames("menu-nav__item dark:text-indigo-200", {
        active: props.active,
        open: props.open,
      })}
    >
      <Link className={classNames("menu-nav__link")} to={props.href}>
        {props.children}
      </Link>
    </li>
  );
};
