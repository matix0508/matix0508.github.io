import './App.css';
import React, {FC, useState} from "react";
import {Route, Routes} from "react-router-dom";
import {PageNotFound} from "./pages/PageNotFound";
import {Home} from "./pages/Home";
import {Resume} from "./pages/Resume";
import {Contact} from "./pages/Contact";
import {Projects} from "./pages/Projects";
import {Lang} from "./Types/Lang";




export const App: FC = () => {
    const [darkMode, setDarkMode] = useState(false);
    const [lang, setLang] = useState(Lang.English)
    return (
        <Routes>
            <Route path="/" element={
                <Home
                    darkMode={darkMode}
                    onSwitchMode={() => setDarkMode(!darkMode)}
                    lang={lang}
                    onSwitchLang={() => setLang(lang === Lang.English ? Lang.Polish : Lang.English)}
                />
            }/>
            <Route path={"/resume"} element={
                <Resume
                    darkMode={darkMode}
                    onSwitchMode={() => setDarkMode(!darkMode)}
                    lang={lang}
                    onSwitchLang={() => setLang(lang === Lang.English ? Lang.Polish : Lang.English)}/>
            }/>
            <Route path={"/contact"} element={
                <Contact
                    darkMode={darkMode}
                    onSwitchMode={() => setDarkMode(!darkMode)}
                    lang={lang}
                    onSwitchLang={() => setLang(lang === Lang.English ? Lang.Polish : Lang.English)}
                />}/>
            <Route path={"/projects"} element={<Projects
                darkMode={darkMode}
                onSwitchMode={() => setDarkMode(!darkMode)}
                lang={lang}
                onSwitchLang={() => setLang(lang === Lang.English ? Lang.Polish : Lang.English)}
            />}>
            </Route>
            <Route path="*" element={<PageNotFound/>} />
        </Routes>

    )
}
export default App;