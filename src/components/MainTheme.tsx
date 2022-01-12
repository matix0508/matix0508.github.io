import React from "react";
import NavBar from "./NavBar";
import MyEmail from "./MyEmail";
import Header from "./Header";
import Invitation from "./Invitation";
import NavItem from "./NavItem";
import {Lang} from "../Types/Lang";

export default function MainTheme(props) {
    return (
        <div className={props.darkMode ? "dark" : "light"}>
            <main className="dark:bg-gray-800 font-mono bg-white relative overflow-hidden h-screen content-center">
                <Invitation />
                <Header>
                    <MyEmail/>
                    <NavBar
                        darkMode={props.darkMode}
                        lang={props.lang}
                        onSwitchMode={props.onSwitchMode}
                        onSwitchLang={props.onSwitchLang}
                    >
                        <NavItem href={"/"}>{props.lang === Lang.English ? "Home" : "Strona Główna"}</NavItem>
                        <NavItem href={"/resume"}>{props.lang === Lang.English ? "Resume" : "Doświadczenie"}</NavItem>
                        <NavItem href={"/projects"}>{props.lang === Lang.English ? "Projects" : "Projekty"}</NavItem>
                        <NavItem href={"/contact"}>{props.lang === Lang.English ? "Contact" : "Kontakt"}</NavItem>
                    </NavBar>
                </Header>
                {props.children}
            </main>
        </div>
    )
}