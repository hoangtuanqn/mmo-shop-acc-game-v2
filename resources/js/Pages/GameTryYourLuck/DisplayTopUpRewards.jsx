import React from "react";
import { formatNumber } from "../../utils/functions";
import { IoDiamond } from "react-icons/io5";

export default function DisplayTopUpRewards({ topUpRewards }) {
    return (
        <>
            {topUpRewards.length <= 0 ? (
                <>
                    <p className="mt-6 text-base font-bold text-center">Hiện tại chưa có phần quà</p>
                </>
            ) : (
                <ul className="pt-4">
                    {topUpRewards.map((item, key) => (
                        <li
                            className="rounded-lg px-2 py-2 duration-200 even:bg-[#F8F8FC] hover:scale-105"
                            key={`${item.balance}-${item.id}`}
                        >
                            <div className="flex items-center justify-between">
                                <span className="font-bold">
                                    Top <span className="text-red-600">{key + 1}</span> nhận
                                </span>

                                <span className="flex items-center px-5 py-1 text-xs font-semibold rounded-sm text-primary xl:text-sm">
                                    <span className="pr-2">{formatNumber(item.balance)}</span>
                                    <IoDiamond />
                                    {/* Lưu ý: Enum các vật phẩm: kc, robux, vàng, ngọc, xu tft, ... mà thay lại icon cho phù hợp */}
                                </span>
                            </div>
                        </li>
                    ))}
                </ul>
            )}
        </>
    );
}
