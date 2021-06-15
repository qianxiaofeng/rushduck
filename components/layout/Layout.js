import Footer from "./Footer";
import Header from "./Header";
import React from "react";
import {MDXProvider} from '@mdx-js/react'
import Link from 'next/link'

const CustomLink = (props) => {
    const href = props.href;
    const isInternalLink = href && (href.startsWith('/') || href.startsWith('#'));
    console.log(href);
    if (isInternalLink) {
        console.log("isInternalLink")
        return (
            <Link href={href}>
                <a {...props} />
            </Link>
        );
    }
    console.log("is not internal")

    return <a target="_blank" rel="noopener noreferrer" href={href} {...props} />;
};
const components = {
    a: CustomLink
    /*
    h1: Heading.H1,
    h2: Heading.H2,
    // …
    p: Text,
    code: Pre,
    inlineCode: Code
    */
}
export default function Layout(props) {
    return (
        <div className={"flex flex-col bg-gray-100 min-h-screen "}>
            <Header/>
            <MDXProvider components={components}>
                <main
                    className={"prose lg:prose-xl px-4 py-4 mx-auto md:px-6 md:py-12 lg:container flex flex-col flex-grow w-full h-full "}>
                    {props.children}
                </main>
            </MDXProvider>
            <div id={"modal-root"}/>
            <Footer/>
        </div>
    )
}