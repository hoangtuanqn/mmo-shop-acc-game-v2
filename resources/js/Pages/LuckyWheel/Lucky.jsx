import React from "react";
import { histories } from "../Home/fakerData";
import MarqueeData from "../../components/MarqueeData";
import Ranking from "./Ranking";
// Phát âm thanh khi quay
export default function Lucky() {
    return (
        <section className="mb-20 rounded-xl">
            <MarqueeData histories={histories} custom="hidden md:flex" />
            <div className="flex flex-col gap-2 md:flex-row">
                <section className="h-full basis-2/3 overflow-hidden rounded-xl border border-gray-500">
                    <div className="bg-linear-60 from-blue-500 to-purple-500 p-4">
                        <h2 className="text-center text-base font-bold text-white md:text-2xl">
                            Lật thẻ săn kim cương
                        </h2>
                    </div>
                    <div className="flex items-center justify-center bg-white p-4 py-8">
                        <div className="flex items-center justify-center">
                            <div className="aspect-square w-[100%] md:w-[90%]">
                                <img src="https://i.imgur.com/D1BD4Vn.png" alt="" className="object-contain" />
                            </div>
                        </div>
                    </div>
                </section>
                <section className="basis-1/3 rounded-xl border border-gray-500 px-4">
                    <div className="flex gap-2 py-4">
                        <a href="#" className="ht-button-transparent flex-1">
                            Lịch Sử Quay
                        </a>
                        <a href="#" className="ht-button-color-primary flex-1">
                            Rút thưởng
                        </a>
                    </div>
                    <div className="mb-2 flex gap-2 border-b border-gray-600 pb-4">
                        <button
                            href="#"
                            className="ht-button-color-primary from-pink-second to-primary hover:to-pink-second hover:from-primary flex-1 bg-linear-145 duration-200"
                        >
                            Chơi thử
                        </button>
                    </div>
                    <Ranking />
                </section>
            </div>
        </section>
    );
}
