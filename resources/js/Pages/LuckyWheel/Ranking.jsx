import clsx from "clsx";
import React, { useState } from "react";
import { FaMedal } from "react-icons/fa";
import { ranking7Day, rankingDay, topUpRewards } from "./fakerData";
import DisplayRanking from "./DisplayRanking";
import LoadingAnimation from "../../components/LoadingAnimation";
import DisplayTopUpRewards from "./DisplayTopUpRewards";

export default function Ranking() {
    const [activeNav, setActiveNav] = useState(1);
    const listNav = ["Hôm nay", "7 Ngày", "Quà đua top"];
    const ok = [];
    return (
        <div className="mt-3 mb-4">
            <h3 className="flex items-center py-2 text-xl font-bold">
                <FaMedal className="mr-2 text-yellow-400" />
                <span>Top quay thưởng</span>
            </h3>
            <ul className="mt-2 grid grid-cols-3 items-center gap-2 rounded-lg border border-gray-400 px-2 py-1.5 text-center">
                {listNav.map((item, key) => (
                    <li
                        key={item}
                        onClick={() => setActiveNav(key + 1)}
                        className={clsx("cursor-pointer", {
                            "ht-button-color-primary px-2 py-2 text-xs": activeNav === key + 1,
                        })}
                    >
                        {item}
                    </li>
                ))}
            </ul>
            {activeNav === 1 && (
                <LoadingAnimation>
                    <DisplayRanking data={rankingDay} />
                </LoadingAnimation>
            )}
            {activeNav === 2 && (
                <LoadingAnimation>
                    <DisplayRanking data={ranking7Day} />
                </LoadingAnimation>
            )}
            {activeNav === 3 && (
                <LoadingAnimation>
                    <DisplayTopUpRewards topUpRewards={topUpRewards} />
                </LoadingAnimation>
            )}
        </div>
    );
}
