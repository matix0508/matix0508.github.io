import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, {FC} from "react";
import {IconProp} from "@fortawesome/fontawesome-svg-core";

interface IIconProps {
    href: string
    icon: IconProp
}

export const Icon:FC<IIconProps> = (props) => {

    return (
        <a href={props.href || "#"}>
            <FontAwesomeIcon icon={props.icon} />
        </a>
    )
}