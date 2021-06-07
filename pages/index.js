import React from "react";
import Link from "next/link";

export default function HomePage() {
    return (
        <div>
            <Link href={"/food"}>
                <div className={"bg-green-100  w-64 h-40 border text-6xl rounded flex justify-center items-center"}>
                    😋 饮食
                </div>
            </Link>
        </div>
    )
}
