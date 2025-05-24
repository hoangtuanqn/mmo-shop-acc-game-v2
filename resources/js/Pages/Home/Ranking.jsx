import React from "react";
import { rankinger } from "./fakerData";
// const rankinger = [];
import { formatNumber } from "../../utils/functions";
import { Link } from "@inertiajs/react";
import { FaRegHandshake } from "react-icons/fa";
import Button from "../../components/Form/Button";

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
                        <div
                            key={`Ranking${item.id}`}
                            className="mb-2 flex cursor-pointer items-center justify-between rounded-lg px-4 py-2 duration-200 odd:bg-[#4f46e50d] hover:scale-105"
                        >
                            <div className="flex items-center gap-2">
                                <img
                                    src={`/images/icons/${key + 1}.svg`}
                                    alt={`Top ${key + 1} nạp tiền`}
                                    className="aspect-square w-[24px]"
                                />
                                <span className="font-bold text-gray-800">{item.name}</span>
                            </div>
                            {/* <span className="font-bold text-primary">{formatNumber(item.total)}</span> */}
                            <span className="px-5 py-1 text-xs font-semibold text-white bg-red-500 rounded-sm xl:text-sm">
                                {formatNumber(item.total)}đ
                            </span>
                        </div>
                    ))
                ) : (
                    <>
                        <h1 className="mb-6 text-base font-bold text-center">Chưa có dữ liệu</h1>
                        <Button href="/" Element="Link">
                            <FaRegHandshake className="text-white ht-icon" />
                            <span> Nạp ngay</span>
                            <FaRegHandshake className="text-white ht-icon" />
                        </Button>
                    </>
                )}
            </div>
        </>
    );
}
