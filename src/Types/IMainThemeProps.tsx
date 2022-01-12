import {Lang} from "./Lang";

export interface IMainThemeProps {
    darkMode: boolean,
    onSwitchMode: () => void,
    lang: Lang,
    onSwitchLang: () => void
}