import React from "react";
import classNames from "classnames";

export default function FilterGrid({filters, applyFilters}) {
    const default_cls = "bg-red-50";
    const selected_cls = "bg-blue-50";

    return (
        <div className={"grid grid-cols-12 gap-1"}>
            {
                filters.map((filter, index) => {
                    return (
                        <div key={filter.name} className={
                            classNames(
                                {[`${default_cls}`]: !filter.selected},
                                {[`${selected_cls}`]: filter.selected}
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