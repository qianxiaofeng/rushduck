import React from "react";
import Link from "next/link";

export default function Home() {
    return (
        <div>
            <Link href={"/food"}>
                <div className={"bg-green-100 w-screen h-40 border text-6xl rounded flex justify-center items-center"}>
                    😋 饮食
                </div>
            </Link>
        </div>
    )
}
