import "./App.scss";
import React, { FC, useState } from "react";
import { NavBar } from "./components/NavBar";
import { MyEmail } from "./components/MyEmail";
import { Header } from "./components/Header";
import Invitation from "./components/Invitation";
import { NavItem } from "./components/NavItem";
import { Route, Routes } from "react-router-dom";
import { PageNotFound } from "./pages/PageNotFound";
import { Home } from "./pages/Home";
import { Resume } from "./pages/Resume";
import { Contact } from "./pages/Contact";
import { Projects } from "./pages/Projects";
import { Lang } from "./Types/Lang";
import { DarkModeToggle } from "./components/DarkModeToggle";
import { LanguageToggle } from "./components/LanguageToggle";

function otherLang(lang: Lang) {
  return Lang.English === lang ? Lang.Polish : Lang.English;
}

export const App: FC = () => {
  const [darkMode, setDarkMode] = useState(true);
  const [lang, setLang] = useState(Lang.English);
  const [menuOpened, setMenuOpened] = useState(false);
  return (
    <div className={darkMode ? "dark" : "light"}>
      <main className="dark:bg-gray-800 font-mono bg-white relative overflow-hidden h-screen content-center">
        <Invitation />
        <Header>
          <NavBar
            darkMode={darkMode}
            lang={lang}
            onSwitchMode={() => setDarkMode(!darkMode)}
            onSwitchLang={() =>
              setLang(lang === Lang.English ? Lang.Polish : Lang.English)
            }
            onClick={() => setMenuOpened(!menuOpened)}
            open={menuOpened}
          >
            <NavItem href={"/"} open={menuOpened}>
              {lang === Lang.English ? "Home" : "Strona Główna"}
            </NavItem>
            <NavItem href={"/resume"} open={menuOpened}>
              {lang === Lang.English ? "Resume" : "Doświadczenie"}
            </NavItem>
            <NavItem href={"/projects"} open={menuOpened}>
              {lang === Lang.English ? "Projects" : "Projekty"}
            </NavItem>
            <NavItem href={"/contact"} open={menuOpened}>
              {lang === Lang.English ? "Contact" : "Kontakt"}
            </NavItem>
          </NavBar>
          
          <MyEmail />
          
           <DarkModeToggle
            darkMode={darkMode}
            onSwitchMode={() => setDarkMode(!darkMode)}
          />
          {/* <LanguageToggle
            lang={lang}
            onSwitchLang={() => setLang(otherLang(lang))}
          /> */}
        </Header>
        <Routes>
          <Route path="/" element={<Home lang={lang} />} />
          <Route path={"/resume"} element={<Resume />} />
          <Route path={"/contact"} element={<Contact />} />
          <Route path={"/projects"} element={<Projects />}></Route>
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </main>
    </div>
  );
};
export default App;
