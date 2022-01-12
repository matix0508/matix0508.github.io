import {MainTheme} from "../components/MainTheme";
import ComplexList from "../components/ComplexList/ComplexList";
import React, {FC} from "react";
import {IMainThemeProps} from "../Types/IMainThemeProps";



export const Projects:FC<IMainThemeProps> = (props) => {
    return (
        <MainTheme
            darkMode={props.darkMode}
            onSwitchMode={props.onSwitchMode}
            lang={props.lang}
            onSwitchLang={props.onSwitchLang}
        >
            <ComplexList />
        </MainTheme>

    )
}