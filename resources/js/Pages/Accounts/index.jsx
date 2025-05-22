import React from "react";
import AppHead from "../../components/AppHead";
import Description from "../../components/Description";
import ListAccounts from "./ListAccounts";
import Filter from "./Filter";

export default function index({ slug }) {
    return (
        <>
            <AppHead title="Danh sách acc game" />
            <div className="mb-20">
                <h2 className="before:bg-primary text-md relative mb-6 pb-2.5 text-center font-bold uppercase before:absolute before:bottom-0 before:left-[50%] before:h-[3px] before:w-[60px] before:transform-[translate(-50%)] before:rounded-lg md:text-2xl">
                    DANH MỤC GAME LIÊN QUÂN
                </h2>
                <Description>
                    <h2>Giới thiệu về trò chơi</h2>
                    <p>
                        Trò chơi này mang đến cho bạn những trải nghiệm thú vị và hấp dẫn. Với đồ họa đẹp mắt và lối
                        chơi sáng tạo, bạn sẽ không thể rời mắt khỏi màn hình.
                    </p>

                    <ul>
                        <li>Hệ thống nhân vật đa dạng với nhiều kỹ năng độc đáo.</li>
                        <li>Các chế độ chơi phong phú, từ đơn giản đến thử thách.</li>
                        <li>Cập nhật thường xuyên với các sự kiện và phần thưởng hấp dẫn.</li>
                    </ul>
                </Description>
                <Filter />
                <ListAccounts />
            </div>
        </>
    );
}
