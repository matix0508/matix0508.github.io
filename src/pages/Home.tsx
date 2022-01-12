import React, {FC} from "react";
import {MainTheme} from "../components/MainTheme";
import {ShowCase} from "../components/ShowCase";
import {IMainThemeProps} from "../Types/IMainThemeProps";

export const Home : FC<IMainThemeProps> = (props) => {
    return (
        <MainTheme
            darkMode={props.darkMode}
            onSwitchMode={props.onSwitchMode}
            lang={props.lang}
            onSwitchLang={props.onSwitchLang}
        >
            <ShowCase
                lang={props.lang}
            />
        </MainTheme>
    )
}