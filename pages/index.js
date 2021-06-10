import React from "react";
import Link from "next/link";

export default function HomePage() {
    return (
        <div className={"w-full flex flex-col  "}>
            <Link href={"/food"}>
                <div
                    className={"w-full h-32 py-8 bg-green-100  border text-6xl rounded-lg flex justify-center items-center"}>
                    😋 饮食
                </div>
            </Link>
            <Link href={"/guide"}>
                <div
                    className={" w-full h-32 py-8 bg-green-100   border text-6xl rounded-lg flex justify-center items-center"}>
                    📚 指南
                </div>
            </Link>
            <Link href={"/calendar"}>
                <div
                    className={"w-full h-32 py-8 bg-green-100   border text-6xl rounded-lg flex justify-center items-center"}>
                    📅 日历
                </div>
            </Link>
        </div>
    )
}
