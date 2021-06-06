import React from "react";
import Link from "next/link";
import classNames from "classnames";

export default function CardSet({cards}) {
    return (
        <div className={"grid grid-cols-2 gap-4"}>
            {
                cards.map((c, i) => {
                    let rating_cls = "";
                    const basic_cls = "border-2 text-2xl rounded-lg";
                    let tmp = "";
                    switch (c.recommend) {
                        case 2:
                            tmp = "⬆️⬆️";
                            rating_cls = "bg-green-300"
                            break;
                        case 1:
                            tmp = "⬆️";
                            rating_cls = "bg-green-100"
                            break;
                        case 0:
                            tmp = "🤔";
                            rating_cls = "bg-green-50"
                            break;
                        case -1:
                            tmp = "⬇️";
                            rating_cls = "bg-red-100"
                            break;
                        case -2:
                            tmp = "⬇️⬇️";
                            rating_cls = "bg-red-300"
                            break;
                        default:
                            break;
                    }

                    return (<div key={i} className={classNames(basic_cls, rating_cls)}>
                            <Link href={c.link}>
                                <a>
                                    <div>
                                        <div className={"truncate px-1"}>{c.name_cn}</div>
                                        {tmp}
                                    </div>
                                </a>

                            </Link>
                        </div>
                    )
                })

            }
        </div>
    )
}