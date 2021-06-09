import Footer from "./Footer";
import Header from "./Header";
import React from "react";

export default function Layout(props) {
    return (
        <div className={"flex flex-col bg-gray-100 min-h-screen "}>
            <Header/>
            <main className={" px-4 py-4 mx-auto md:px-6 md:py-12 lg:container flex flex-grow w-full h-full"}>
                {props.children}
            </main>
            <Footer/>
        </div>
    )
}