import React from 'react';
import classNames from "classnames";
import dayjs from "dayjs";
import isoWeek from "dayjs/plugin/isoWeek";

export default function Calendar() {
    dayjs.extend(isoWeek);
    let now = dayjs();
    let startDate = now.date(1).isoWeekday(1);
    const lastDateInMonth = now.date(now.daysInMonth());
    let endDate;
    if (lastDateInMonth.isoWeekday() === 7) {
        endDate = now.date(now.daysInMonth());
    } else {
        endDate = lastDateInMonth.isoWeekday(7);
    }
    let count = endDate.diff(startDate, 'd') + 1;
    let currentMonth = now.month();

    let data = [];
    for (let i = 0; i < count; i++) {
        let tmpDate = startDate.add(i, 'd');
        data.push(
            {
                date: tmpDate,
                dom: tmpDate.date(),
                isCurrentMonth: tmpDate.month() === currentMonth,
                isCurrentDate: tmpDate.diff(now, 'd') === 0,
            }
        )
    }

    const headers = ["一", "二", "三", "四", "五", "六", "日"]

    return (
        <div className={"h-full w-full flex flex-grow flex-col"}>
            <div className={"grid grid-cols-7"}>
                {
                    //table header
                    headers.map((d, i) => {
                        const border_style = classNames("border-l border-gray-300 ", {"border-r": i === 6});

                        return (
                            <div key={`dow-${i}`}>
                                <div className={`grid-rows-1 text-center font-bold`}>
                                    {d}
                                </div>
                                <div className={`grid-rows-1 h-3 ${border_style}`}>
                                </div>
                            </div>

                        );
                    })
                }
            </div>
            <div className={"overflow-hidden bg-white grid grid-cols-7 h-full w-full"}>
                {
                    //table dates
                    data.map((d, i) => {
                        const dateStyle = classNames("w-full h-8 text-center align-bottom", {"text-gray-300": !d.isCurrentMonth}, {"border-2  text-white bg-blue-600": d.isCurrentDate})
                        return (
                            <div className={"col-span-1 border border-gray-100 flex justify-center align-center"}
                                 key={`date-${i}`}>
                                <div className={`${dateStyle}`}>
                                    {d.dom}
                                </div>
                            </div>
                        );
                    })
                }
            </div>
        </div>
    )
}