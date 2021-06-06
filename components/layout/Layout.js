import Footer from "./Footer";
import Header from "./Header";
import React from "react";

export default function Layout(props) {
    return (
        <div className={"flex flex-col min-h-screen"}>
            <Header/>
            <main className={"flex-1 px-4 py-6 mx-auto md:px-6 md:py-12 lg:container"}>
                {props.children}
            </main>
            <Footer/>
        </div>
    )
}