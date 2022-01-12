import {Link} from "react-router-dom";

export default function NavItem(props) {
    return (
        <Link className="py-2 px-6 flex hover:text-black" to={props.href}>
            {props.children}
        </Link>
    )
}