import {MainTheme} from "../components/MainTheme";
import ContactMe from "../components/ContactMe";
import SocialMedia from "../components/SocialMedia";
import {IMainThemeProps} from "../Types/IMainThemeProps";
import React, {FC} from "react";

export const Contact: FC<IMainThemeProps> = (props) => {
    return (

        <MainTheme
            darkMode={props.darkMode}
            onSwitchMode={props.onSwitchMode}
            lang={props.lang}
            onSwitchLang={props.onSwitchLang}
        >
            <SocialMedia/>
            <ContactMe/>
        </MainTheme>

    )
}