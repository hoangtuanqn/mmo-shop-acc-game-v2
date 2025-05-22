import React, { memo } from "react";
import { formatNumber, subString } from "../../utils/functions";

function DisplayRanking({ data }) {
    return (
        <>
            {data.length <= 0 ? (
                <>
                    <p className="mt-6 text-base font-bold text-center">Hiện chưa có dữ liệu</p>
                </>
            ) : (
                <ul className="pt-4">
                    {data.map((item, key) => (
                        <li
                            className="flex items-center gap-2 rounded-sm px-2 py-2 even:bg-[#F8F8FC]"
                            key={`${item.name}-${item.id}`}
                        >
                            <div className="flex items-center justify-center w-6 border border-gray-300 rounded-full aspect-square">
                                <span className="text-xs font-bold">{key + 1}</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <img
                                    src="/images/user_avatar.png"
                                    alt="Anonymous User Ranking"
                                    className="aspect-auto w-[35px] object-cover"
                                />
                                <div className="flex flex-col">
                                    <span className="font-bold">{subString(item.name)}</span>
                                    <span className="text-gray-400">{formatNumber(item.plays)} lượt</span>
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
            )}
        </>
    );
}
export default memo(DisplayRanking);
