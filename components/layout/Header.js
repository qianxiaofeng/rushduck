import React from "react";
import Navigation from "../Navigation";

export default function Header() {
    const links = [
        {name: "主页", path: "/"},
        {name: "饮食", path: "/food"},
        {name: "指南", path: "/guide"},
        {name: "日历", path: "/calendar"},
    ]
    return (
        <Navigation links={links}/>
    )
}
