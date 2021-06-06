import React from "react";
import Navigation from "../Navigation";

export default function Header() {
    const links = [
        {name: "主页", path: "/"},
        {name: "饮食", path: "/food"},
    ]
    return (
        <Navigation links={links}/>
    )
}
