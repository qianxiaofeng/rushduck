import React from "react";
import Link from "next/link";
import classNames from "classnames";

export default function CardSet({cards}) {
    return (
        <div className={"grid grid-cols-2 gap-4"}>
            {
                cards.map((c, i) => {
                    let ratingColorStyle = "";
                    const nonRatingColorStyle = "bg-gray-200";
                    const ratingBasicStyle = "w-full h-1/5 border-2 bg-gray-200 border-white";
                    const nonRatingStyle = classNames(ratingBasicStyle, nonRatingColorStyle);
                    let borderColorStyle;

                    let ratingMeter, ratingStyle;
                    switch (c.recommend) {
                        case 2:
                            borderColorStyle = "border-green-600"
                            ratingColorStyle = "bg-green-600"
                            ratingStyle = classNames(ratingBasicStyle, ratingColorStyle);
                            ratingMeter = (
                                <div className={"flex flex-col w-1/5 h-full"}>
                                    <div className={ratingStyle}/>
                                    <div className={nonRatingStyle}/>
                                    <div className={nonRatingStyle}/>
                                    <div className={nonRatingStyle}/>
                                    <div className={nonRatingStyle}/>
                                </div>
                            )
                            break;
                        case 1:
                            borderColorStyle = "border-green-300"
                            ratingColorStyle = "bg-green-300"
                            ratingStyle = classNames(ratingBasicStyle, ratingColorStyle);
                            ratingMeter = (
                                <div className={"flex flex-col w-1/5 h-full"}>
                                    <div className={nonRatingStyle}/>
                                    <div className={ratingStyle}/>
                                    <div className={nonRatingStyle}/>
                                    <div className={nonRatingStyle}/>
                                    <div className={nonRatingStyle}/>
                                </div>
                            )
                            break;
                        case 0:
                            borderColorStyle = "border-green-100"
                            ratingColorStyle = "bg-green-100"
                            ratingStyle = classNames(ratingBasicStyle, ratingColorStyle);
                            ratingMeter = (
                                <div className={"flex flex-col w-1/5 h-full"}>
                                    <div className={nonRatingStyle}/>
                                    <div className={nonRatingStyle}/>
                                    <div className={ratingStyle}/>
                                    <div className={nonRatingStyle}/>
                                    <div className={nonRatingStyle}/>
                                </div>
                            )
                            break;
                        case -1:
                            borderColorStyle = "border-red-300"
                            ratingColorStyle = "bg-red-300"
                            ratingStyle = classNames(ratingBasicStyle, ratingColorStyle);
                            ratingMeter = (
                                <div className={"flex flex-col w-1/5 h-full"}>
                                    <div className={nonRatingStyle}/>
                                    <div className={nonRatingStyle}/>
                                    <div className={nonRatingStyle}/>
                                    <div className={ratingStyle}/>
                                    <div className={nonRatingStyle}/>
                                </div>
                            )
                            break;
                        case -2:
                            borderColorStyle = "border-red-600"
                            ratingColorStyle = "bg-red-600"
                            ratingStyle = classNames(ratingBasicStyle, ratingColorStyle);
                            ratingMeter = (
                                <div className={"flex flex-col w-1/5 h-full"}>
                                    <div className={nonRatingStyle}/>
                                    <div className={nonRatingStyle}/>
                                    <div className={nonRatingStyle}/>
                                    <div className={nonRatingStyle}/>
                                    <div className={ratingStyle}/>
                                </div>
                            )
                            break;
                        default:
                            break;
                    }

                    return (<div key={i}>
                            <Link href={c.link}>
                                    <div className={"flex flex-row h-24"}>
                                        {ratingMeter}
                                        <div
                                            className={classNames("w-4/5  overflow-ellipsis overflow-hidden px-4 border-2 rounded-r-lg text-2xl bg-gray-200", borderColorStyle)}>{c.name_cn}</div>
                                    </div>
                            </Link>
                        </div>
                    )
                })

            }
        </div>
    )
}