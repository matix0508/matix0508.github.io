import { ListHeader } from "./ListHeader"
import { ListItem } from "./ListItem"



export default function ComplexList() {
    return (

        <div className="container flex flex-col mx-auto w-full items-center justify-center">
            <ListHeader />
            <ul className="flex flex-col">
                <ListItem
                    title={"Jean Jack"}
                    subtitle={"Developer"}
                    imageURL={"https://www.tailwind-kit.com/images/person/6.jpg"}
                    href={"/"}
                    text={""}
                />
            </ul>
        </div>

    )
}