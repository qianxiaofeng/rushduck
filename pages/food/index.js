import React, {useState} from 'react'
import {FOOD_GROUP, HER2_FOODS} from "/data/HER2_Foods"
import FilterGrid from "/components/FilterGrid";
import CardSet from "/components/CardSet"

export default function Foods() {
    let defaultGroupFilters = Object.values(FOOD_GROUP).map(o => ({...o, selected: true}));
    let defaultFilteredFoods = HER2_FOODS.slice().sort((a, b) => b.rate.value - a.rate.value);
    defaultFilteredFoods.forEach(f => {
        f.link = `/food/${f.name}`
        f.recommend = f.rate.value
    })
    const [groupFilters, setGroupFilters] = useState(defaultGroupFilters);
    const [filteredFoods, setFilteredFoods] = useState(defaultFilteredFoods);

    const applyGroupFilters = (e, index) => {
        let newGroupFilters = groupFilters.slice();
        const wasAllSelected = groupFilters.every(f => f.selected);
        if (wasAllSelected) {
            //apply single filer
            newGroupFilters.forEach((f, i) => f.selected = i === index);
        } else {
            //switch to single filter or toggle back to select all
            const oldFilterIndex = groupFilters.findIndex(f => f.selected);
            if (oldFilterIndex === index) {
                //toggle back to select all
                newGroupFilters.forEach(f => f.selected = true);
            } else {
                //switch single filter
                newGroupFilters.forEach((f, i) => f.selected = i === index);
            }
        }

        setGroupFilters(newGroupFilters)

        let newFilteredFoods = defaultFilteredFoods
            .filter(food => {
                let groupNames = groupFilters.filter(g => g.selected).map(g => g.name);
                return groupNames.includes(food.group.name);
            }).slice()
        setFilteredFoods(newFilteredFoods);
    }

    return (
        <div>
            <div>
                <FilterGrid filters={groupFilters} applyFilters={applyGroupFilters}/>
            </div>
            <div className={"my-6"}>
                <CardSet cards={filteredFoods}/>
            </div>
        </div>
    );
}
