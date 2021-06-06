import React from 'react'
import {HER2_FOODS} from "/data/HER2_Foods"
import Link from "next/link";

export default function Foods() {

    return (
        <div>
            <ul>
                {
                    HER2_FOODS.map(f =>
                        <li key={f.name}>
                            <Link href={`/food/${f.name}`}>
                                <a>{f.name_cn}</a>
                            </Link>

                        </li>
                    )
                }
            </ul>
        </div>
    );
}
