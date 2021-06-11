import React, {useEffect, useState} from 'react';
import classNames from "classnames";
import dayjs from "dayjs";
import isoWeek from "dayjs/plugin/isoWeek";
import Modal from "./Modal";
import useModal from "./useModal";

export default function Calendar({getEventsByDate}) {
    dayjs.extend(isoWeek);
    let defaultTargetMonthFirstDate = dayjs().startOf('month');
    let [targetMonthFirstDate, setTargetMonthFirstDate] = useState(defaultTargetMonthFirstDate);
    let [data, setData] = useState([]);
    let {isShowingModal, toggleModal} = useModal();
    let [eventModalData, setEventModalData] = useState({});

    function calTargetMonthData(targetMonthFirstDate) {
        let startDate = targetMonthFirstDate.isoWeekday(1);
        const lastDateInMonth = targetMonthFirstDate.endOf('month');
        let endDate;
        if (lastDateInMonth.isoWeekday() === 7) {
            endDate = targetMonthFirstDate.endOf('month');
        } else {
            endDate = lastDateInMonth.isoWeekday(7);
        }
        let count = endDate.diff(startDate, 'd') + 1;
        const today = dayjs().startOf('d');
        let displayData = [];

        for (let i = 0; i < count; i++) {
            let targetDate = startDate.add(i, 'd');
            let targetEvents = getEventsByDate(targetDate);
            displayData.push(
                {
                    date: targetDate,
                    dom: targetDate.date(),
                    isCurrentMonth: targetDate.month() === targetMonthFirstDate.month(),
                    isCurrentDate: targetDate.diff(today, 'd') === 0,
                    events: targetEvents,
                }
            )
        }
        return displayData;
    }

    function handleEventClicked(event) {
        setEventModalData(event);
        toggleModal();
    }

    function handlePreviousMonth() {
        let newDisplayDate = targetMonthFirstDate.subtract(1, 'month');
        setTargetMonthFirstDate(newDisplayDate);
    }

    function handleNextMonth() {
        let newDisplayDate = targetMonthFirstDate.add(1, 'month');
        setTargetMonthFirstDate(newDisplayDate);
    }

    useEffect(() => {
        setData(calTargetMonthData(targetMonthFirstDate));
    }, [targetMonthFirstDate])

    const WEEKDAY_NAMES = ["一", "二", "三", "四", "五", "六", "日"];
    const MONTH_NAMES = ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"];

    return (
        <div className={"h-full w-full flex flex-grow flex-col justify-between"}>
            <div className={"flex flex-row justify-around h-6"}>
                <div className={"w-1/2 flex flex-row justify-around items-center"}>
                    <div className={""}>
                        {targetMonthFirstDate.year()}
                    </div>
                    <div>
                        {MONTH_NAMES[targetMonthFirstDate.month()]}
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
                        const dateStyle = classNames("w-full h-8 text-center align-bottom", {"text-gray-300": !d.isCurrentMonth}, {"border-2  text-white bg-blue-500": d.isCurrentDate})
                        return (
                            <div className={"col-span-1 border border-gray-100 flex flex-col justify-start "}
                                 key={`date-${i}`}>
                                <div className={`${dateStyle}`}>
                                    {d.dom}
                                </div>
                                {d.events.map((event, i) => {
                                    return (
                                        <div key={`event-${i}`}
                                             className={"text-sm text-center truncate border border-blue-300 rounded-lg my-1"}
                                             onClick={() => handleEventClicked(event)}
                                        >
                                            {event.title}
                                        </div>
                                    )
                                })}
                            </div>
                        );
                    })
                }
            </div>
            <Modal show={isShowingModal} onClose={toggleModal}>
                <div className={"h-full w-full rounded-lg flex flex-col justify-center px-6 py-6 bg-gray-50 "}>
                    <div className={"text-center text-3xl"}>{eventModalData.title}</div>
                    <div className={"text-left pt-10 text-lg"}>{eventModalData.detail}</div>
                </div>
            </Modal>
        </div>
    )
}