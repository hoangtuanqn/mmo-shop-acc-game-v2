import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import { histories } from "./fakerData";
import { subString } from "../../utils/functions";

export default function MarqueeData() {
    return (
        <div className="mb-20 flex items-center rounded-lg bg-white px-3 py-3 shadow-[0_10px_20px_rgba(0,0,0,0.05)]">
            <FaShoppingCart className="mr-2 text-gray-800 ht-icon" />
            <marquee>
                {histories.map((item) => (
                    <span key={`${item.username}-${item.action}`} className="pl-5">
                        <b>{subString(item.username)}</b> {item.action}
                    </span>
                ))}
            </marquee>
        </div>
    );
}
