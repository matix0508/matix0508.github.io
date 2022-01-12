import React, {FC} from "react";
import {DarkModeToggle} from "./DarkModeToggle";
import {LanguageToggle} from "./LanguageToggle";
import {IMainThemeProps} from "../Types/IMainThemeProps";
import "./NavBar.scss"

interface INavBarProps {
    onClick: () => void

}

export const NavBar: FC<IMainThemeProps & INavBarProps> = (props) => {
    return (
        <div className="flex items-center">
            <nav
                className="font-sen text-gray-800 dark:text-white uppercase text-lg lg:flex items-center hidden">
                {props.children}

                <DarkModeToggle darkMode={props.darkMode} onSwitchMode={props.onSwitchMode}/>
                <LanguageToggle lang={props.lang} onSwitchLang={props.onSwitchLang}/>
            </nav>
            <div onClick={props.onClick} className="menu-btn">
                <span className="menu-btn__burger"></span>
            </div>
        </div>
    )
}