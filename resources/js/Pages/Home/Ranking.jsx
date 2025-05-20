import React from "react";
import { rankinger } from "./fakerData";
// const rankinger = [];
import { formatNumber } from "../../utils/functions";
import { Link } from "@inertiajs/react";
import { FaRegHandshake } from "react-icons/fa";

export default function Ranking() {
    return (
        <>
            <div className="bg-primary flex rounded-t-lg px-4 py-2.5">
                <img src="/images/icons/top.png" alt="" className="aspect-auto w-[20px]" />
                <h2 className="pl-2 text-base font-bold text-white uppercase">
                    Top nạp tháng {new Date().getMonth() + 1}
                </h2>
            </div>

            <div className="rounded-b-lg bg-white p-4 shadow-[0_5px_15px_#00000008]">
                {rankinger.length > 0 ? (
                    rankinger.map((item, key) => (
                        <div className="mb-2 flex cursor-pointer items-center justify-between rounded-lg px-4 py-3 duration-200 odd:bg-[#4f46e50d] hover:scale-105">
                            <div className="flex items-center gap-2">
                                <img
                                    src={`/images/icons/${key + 1}.svg`}
                                    alt={`Top ${key + 1} nạp tiền`}
                                    className="aspect-square w-[24px]"
                                />
                                <span className="font-bold text-gray-800">{item.name}</span>
                            </div>
                            <span className="text-primary font-bold">{formatNumber(item.total)}</span>
                        </div>
                    ))
                ) : (
                    <>
                        <h1 className="mb-6 text-center text-base font-bold">Chưa có dữ liệu</h1>
                        <Link className="ht-flex-center ht-button-color-primary gap-1">
                            <FaRegHandshake className="ht-icon text-white" />
                            <span> Nạp ngay</span>
                            <FaRegHandshake className="ht-icon text-white" />
                        </Link>
                    </>
                )}
            </div>
        </>
    );
}
