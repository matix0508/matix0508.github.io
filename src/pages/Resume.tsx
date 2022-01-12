import {MainTheme} from "../components/MainTheme";
import Cards from "../components/Cards";
import React, {FC} from "react";
import {IMainThemeProps} from "../Types/IMainThemeProps";

export const Resume: FC<IMainThemeProps> = (props) => {
    return (
        <MainTheme
            darkMode={props.darkMode}
            onSwitchMode={props.onSwitchMode}
            lang={props.lang}
            onSwitchLang={props.onSwitchLang}
        >
            <Cards />
        </MainTheme>
    )
}