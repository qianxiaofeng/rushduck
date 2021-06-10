import React from 'react';

export default function Timeline({data}) {


    return (
        <div className={"min-h-screen"}>
            <div className={"flex flex-col"}>
                {
                    data.map((d, index) => {
                        return (
                            <div className={"flex flex-row"} key={index}>
                                <div className={"w-1/5 flex justify-center"}>
                                    <div
                                        className={"relative flex justify-center items-center h-full w-1 bg-green-300"}>
                                        <div
                                            className={"absolute h-8 w-8 flex flex-wrap items-center justify-center bg-white border-2 border-green-600 rounded-full "}>
                                            <p>{index + 1}</p>
                                        </div>
                                    </div>
                                </div>
                                <div className={"w-4/5 px-2 py-10"}>
                                    <div className={"w-full bg-white px-4 py-5 rounded-lg flex flex-col  shadow"}>
                                        <div className={"font-bold text-3xl"}>{d.title}</div>
                                        <p className={"leading-normal text-gray-600 pt-4 text-xl"}>
                                            {d.detail}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        );
                    })
                }
            </div>
        </div>
    )
}