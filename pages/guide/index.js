import React from 'react';
import Timeline from "../../components/Timeline";
import {GUIDES} from "../../data/GUIDE_DATA";

export default function GuidePage() {


    return (
        <div className={"w-full"}>
            <Timeline data={GUIDES}/>
        </div>
    )
}