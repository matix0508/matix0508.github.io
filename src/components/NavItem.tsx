import { Link } from "react-router-dom";
import React, { FC } from "react";
import "./NavItem.scss";
import classNames from "classnames";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";

interface INavItemProps {
  href: string;
  active?: boolean;
  open: boolean;
  icon: IconProp
}

export const NavItem: FC<INavItemProps> = (props) => {
  return (
    <li
      className={classNames("menu-nav__item dark:text-indigo-200", {
        active: props.active,
        open: props.open,
      })}
    >
      <Link className={classNames("menu-nav__item__link")} to={props.href}>
        {props.children}
      </Link>
      <Link className={classNames("menu-nav__item__icon")} to={props.href}>
        <FontAwesomeIcon icon={props.icon} />
      </Link>
    </li>
  );
};
