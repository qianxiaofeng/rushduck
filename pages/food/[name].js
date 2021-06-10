import React from 'react'
import {useRouter} from "next/router";
import {FIND_HER2_FOODS_BY_NAME} from "/data/HER2_Foods";

export default function FoodPage() {
    const router = useRouter();
    const {name} = router.query;

    const food = FIND_HER2_FOODS_BY_NAME(name);
    return (
        <div className={"flex justify-center text-center w-full"}>
            {
                food ? <div>
                        <div className={"text-2xl font-bold"}>{food.name_cn}</div>
                        <div>细节待完善</div>
                    </div>
                    :
                    <div>该食物无记录</div>
            }
        </div>
    );
}