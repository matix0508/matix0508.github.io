import {Link} from "react-router-dom";
import React, {FC} from "react";

interface INavItemProps {
    href: string
}

export const NavItem: FC<INavItemProps> = (props) => {
    return (
        <Link className="py-2 px-6 flex hover:text-black" to={props.href}>
            {props.children}
        </Link>
    )
}