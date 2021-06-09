import React, {useEffect, useState} from 'react';
import classNames from "classnames";
import dayjs from "dayjs";
import isoWeek from "dayjs/plugin/isoWeek";

export default function Calendar() {
    dayjs.extend(isoWeek);
    let defaultDisplayDate = dayjs().startOf('month');
    let [displayDate, setDisplayDate] = useState(defaultDisplayDate);
    let [data, setData] = useState([]);


    function calDisplayData(displayDate) {
        let startDate = displayDate.isoWeekday(1);
        const lastDateInMonth = displayDate.endOf('month');
        let endDate;
        if (lastDateInMonth.isoWeekday() === 7) {
            endDate = displayDate.endOf('month');
        } else {
            endDate = lastDateInMonth.isoWeekday(7);
        }
        let count = endDate.diff(startDate, 'd') + 1;
        const today = dayjs().startOf('d');
        let displayData = [];

        for (let i = 0; i < count; i++) {
            let tmpDate = startDate.add(i, 'd');
            displayData.push(
                {
                    date: tmpDate,
                    dom: tmpDate.date(),
                    isCurrentMonth: tmpDate.month() === displayDate.month(),
                    isCurrentDate: tmpDate.diff(today, 'd') === 0,
                }
            )
        }
        return displayData;
    }

    function handlePreviousMonth() {
        let newDisplayDate = displayDate.subtract(1, 'month');
        setDisplayDate(newDisplayDate);
    }

    function handleNextMonth() {
        let newDisplayDate = displayDate.add(1, 'month');
        setDisplayDate(newDisplayDate);
    }

    useEffect(() => {
        setData(calDisplayData(displayDate));
    }, [displayDate])

    const WEEKDAY_NAMES = ["一", "二", "三", "四", "五", "六", "日"];
    const MONTH_NAMES = ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"];

    return (
        <div className={"h-full w-full flex flex-grow flex-col justify-between"}>
            <div className={"flex flex-row justify-around h-6"}>
                <div className={"w-1/2 flex flex-row justify-around items-center"}>
                    <div className={""}>
                        {displayDate.year()}
                    </div>
                    <div>
                        {MONTH_NAMES[displayDate.month()]}
                    </div>
                </div>
                <div className={"w-1/8  border border-gray-300 rounded-lg flex justify-between items-center"}>
                    <button className={"h-6 w-6  hover:bg-gray-300"}
                            onClick={handlePreviousMonth}
                    >
                        <svg className="text-gray-500 " fill="none"
                             viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                  d="M 18,4 l -10,8 10,8"/>
                        </svg>
                    </button>
                    <div className={"h-6 w-1"}>
                        <svg className="h-full w-full text-gray-300 " fill="none"
                             viewBox="0 0 4 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                  d="M 2,4 l 0,16 "/>
                        </svg>
                    </div>
                    <button className={"h-6 w-6  hover:bg-gray-300"}
                            onClick={handleNextMonth}
                    >
                        <svg className="text-gray-500 " fill="none"
                             viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                  d="M 6,4 l 10,8 -10,8"/>
                        </svg>
                    </button>
                </div>
            </div>
            <div className={"grid grid-cols-7 pt-2"}>
                {
                    //table header
                    WEEKDAY_NAMES.map((d, i) => {
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