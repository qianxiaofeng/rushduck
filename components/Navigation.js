import React from "react";
import Link from "next/link";
import {useRouter} from "next/router";
import classNames from "classnames";

export default function Navigation({links}) {
    const router = useRouter();
    const link_cls = " mx-1.5";
    const active_cls = "border-b-2 border-blue-500 border-transparent";

    return (
        <nav className={"bg-white shadow"}>
            <div className={"container flex items-center justify-center p-4 mx-auto text-gray-600"}>
                {
                    links.map((link, index) => {
                        let isActive;
                        if (link.path === "/" && router.pathname !== "/") {
                            isActive = false;
                        } else {
                            isActive = router.asPath.startsWith(link.path)
                        }

                        return (
                            <Link href={link.path}><a key={index}
                                                      className={classNames(link_cls, {[`${active_cls}`]: isActive})}>{link.name}</a></Link>
                        )
                    })
                }
            </div>
        </nav>
    )
}
