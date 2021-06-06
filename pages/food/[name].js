import React from 'react'
import {useRouter} from "next/router";
import {FIND_HER2_FOODS_BY_NAME} from "../../data/HER2_Foods";

export default function Food() {
    const router = useRouter();
    const {name} = router.query;

    const food = FIND_HER2_FOODS_BY_NAME(name);
    console.log(food);
    return (
        <div>
            {
                food ? <div>{food.name_cn}</div>
                    :
                    <div>该食物无记录</div>
            }
        </div>
    );
}