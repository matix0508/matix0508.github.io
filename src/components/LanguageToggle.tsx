import React, {FC} from "react";
import {Lang} from "../Types/Lang";


interface ILanguageToggle {
    onSwitchLang: () => void,
    lang: Lang
}

export const LanguageToggle: FC<ILanguageToggle> = (props) => {
    return (
        <button
            onClick={props.onSwitchLang}
            className="text-red-600"
        >
            {props.lang === Lang.English ? "Zmień na Język Polski" : "Change To English"}
        </button>
    )
}