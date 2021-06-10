import React from "react";
import classNames from "classnames";

export default function FilterGrid({filters, applyFilters}) {
    const defaultStyle = "col-span-1 w-6 rounded-t-full text-center py-2";
    const unselectedStyle = "bg-gradient-to-b from-gray-500 to-gray-300 text-white font-thin";
    const selectedStyle = " bg-gradient-to-b from-green-800 to-green-500 text-white";

    return (
        <div className={"w-full grid grid-cols-12 gap-1"}>
            {
                filters.map((filter, index) => {
                    return (
                        <div key={filter.name} className={
                            classNames(defaultStyle,
                                {[`${unselectedStyle}`]: !filter.selected},
                                {[`${selectedStyle}`]: filter.selected}
                            )}
                             onClick={(e) => applyFilters(e, index)}
                        >
                            {filter.name_cn}
                        </div>
                    )
                })
            }
        </div>
    )
}