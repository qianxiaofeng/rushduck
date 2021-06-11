import React from "react";
import Calendar from "/components/Calendar";
import {GET_EVENTS_BY_DATE} from "../../data/EVENT_DATA";

export default function CalendarPage() {
    return (
        <div className={"min-h-full w-full"}>
            <Calendar getEventsByDate={GET_EVENTS_BY_DATE}/>
        </div>
    )
}