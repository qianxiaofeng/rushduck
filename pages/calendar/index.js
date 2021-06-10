import React from "react";
import Calendar from "/components/Calendar";
import {EVENT_DATA} from "../../data/EVENT_DATA";

export default function CalendarPage() {
    return (
        <div className={"min-h-full w-full"}>
            <Calendar events={EVENT_DATA}/>
        </div>
    )
}