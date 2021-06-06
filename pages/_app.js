import 'tailwindcss/tailwind.css'
import Layout from "/components/layout/Layout";
import React from "react";
import Head from "next/head";

function MyApp({Component, pageProps}) {
    return (
        <Layout>
            <Head>
                <title>冲鸭</title>
                <meta name="description" content="冲鸭"/>
                <link rel="icon" href={"/favicon.ico"}/>
            </Head>
            <Component {...pageProps} />
        </Layout>
    )
}

export default MyApp
