import React from "react";
import {Lang} from "../Types/Lang";


export default function LanguageToggle(props) {
    return (
        <button
            onClick={props.onSwitchLang}
            className="text-red-600"
        >
            {props.lang === Lang.English ? "Zmień na Język Polski" : "Change To English"}
        </button>
    )
}