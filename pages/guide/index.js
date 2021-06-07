import React from 'react';
import Timeline from "/components/Timeline";

export default function Guide() {
    const data = [
        {
            title: "饮食",
            detail: "Привет Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad corporis culpa deserunt, dignissimos dolor esse fugit ipsam minus odit officiis placeat qui, quidem quis soluta vero? Adipisci alias eius et iure nam nihil reiciendis saepe, voluptatem. Alias cumque dicta dignissimos ea et laborum, minima similique.",
        },
        {
            title: "饮食",
            detail: "Привет Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad corporis culpa deserunt, dignissimos dolor esse fugit ipsam minus odit officiis placeat qui, quidem quis soluta vero? Adipisci alias eius et iure nam nihil reiciendis saepe, voluptatem. Alias cumque dicta dignissimos ea et laborum, minima similique.",
        },
        {
            title: "饮食",
            detail: "Привет Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad corporis culpa deserunt, dignissimos dolor esse fugit ipsam minus odit officiis placeat qui, quidem quis soluta vero? Adipisci alias eius et iure nam nihil reiciendis saepe, voluptatem. Alias cumque dicta dignissimos ea et laborum, minima similique.",
        }
    ]

    return (
        <div className={"w-full"}>
            <Timeline data={data}/>
        </div>
    )
}