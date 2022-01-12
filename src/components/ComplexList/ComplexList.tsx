import { ListHeader } from "./ListHeader"
import React, {FC} from "react"



export const ComplexList:FC = (props) => {
    return (

        <div className="container flex flex-col mx-auto w-full items-center justify-center">
            <ListHeader />
            <ul className="flex flex-col">
                {props.children}


            </ul>
        </div>

    )
}