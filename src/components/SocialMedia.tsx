import {Icon} from "./Icon";
import React from "react";
import {faFacebook, faGithub, faLinkedin, faTwitter} from "@fortawesome/free-brands-svg-icons";

export default function SocialMedia() {
    return (
        <div className="p-4">
            <div className="text-center mb-4 opacity-90">
                <div className="block relative">
                    <img alt="profil" src={process.env.PUBLIC_URL + "/profile.jpg"}
                         className="mx-auto object-cover rounded-full h-40 w-40 "/>
                </div>
            </div>
            <div className="text-center">
                <p className="text-2xl text-gray-800 dark:text-white">
                    Mateusz Wlekliński
                </p>
                <p className="text-xl text-gray-500 dark:text-gray-200 font-light">
                    Software Developer
                </p>
            </div>
            <div className="pt-8 flex border-t border-gray-200 w-44 mx-auto text-gray-500 items-center justify-between">
                <Icon href={"https://www.facebook.com/matix508/"} icon={faFacebook} />
                <Icon href={"https://twitter.com/59e8d1c70e0b42f"} icon={faTwitter}/>

                <Icon href={"https://github.com/matix0508"} icon={faGithub}/>

                <Icon href={"https://www.linkedin.com/in/mateusz-wlekli%C5%84ski/"} icon={faLinkedin}/>
            </div>
        </div>
    )
}