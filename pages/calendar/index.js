import React from "react";
import Calendar from "../../components/Calendar";
import {GET_EVENTS_BY_DATE} from "../../data/EVENT_DATA";

export default function CalendarPage() {
    return (
        <Calendar getEventsByDate={GET_EVENTS_BY_DATE}/>
    )
}