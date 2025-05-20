import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import { histories } from "./fakerData";

export default function MarqueeData() {
    return (
        <div class="mb-20 flex items-center rounded-lg bg-white px-3 py-3 shadow-[0_10px_20px_rgba(0,0,0,0.05)]">
            <FaShoppingCart />
            <marquee>
                {histories.map((item) => (
                    <span key={`${item.username} ${item.action}`} className="pl-5">
                        <b>{item.username}</b> {item.action}
                    </span>
                ))}
            </marquee>
        </div>
    );
}
