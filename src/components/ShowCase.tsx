import React, {FC} from "react";
import {Lang} from "../Types/Lang";

interface IShowCaseProps {
    lang: Lang
}

export const ShowCase: FC<IShowCaseProps> = (props) => {
    const mainTextPl = "Strony Internetowe i Aplikacje sieciowe dla Biznesu i nie tylko."
    const mainTextEn = "Business and Private Web Pages, web Applications with complex systems"
    return (
        <div className="flex relative z-20 items-center">
            <div
                className="container mx-auto px-6 flex flex-col justify-between items-center relative py-4">
                <div className="flex flex-col">
                    <img src={process.env.PUBLIC_URL + "/avatar.png"}
                         className="rounded-full w-28 mx-auto" alt={"Siema"}/>
                    <p className="text-3xl my-6 text-center dark:text-white">
                        {props.lang === Lang.English ?
                            "Hi, I'm Mateusz 🤘"
                            : "Cześć, Tu Mateusz 🤘"}
                    </p>
                    <h2 className="max-w-3xl text-5xl md:text-6xl font-bold mx-auto dark:text-white text-gray-800 text-center py-2">
                        {props.lang === Lang.English ? mainTextEn : mainTextPl}
                    </h2>
                    <div className="flex items-center justify-center mt-4">
                        <div className="flex items-center justify-center mt-4">
                            <button
                                className="rounded uppercase py-2 my-2 px-4 md:mt-16 bg-transparent dark:text-gray-800 dark:bg-white hover:dark:bg-gray-100 border-2 border-gray-800 text-gray-800 dark:text-white hover:bg-gray-800 hover:text-white text-md">
                                CONNECT WITH ME
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}