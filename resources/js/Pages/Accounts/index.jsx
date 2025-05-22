import React from "react";
import AppHead from "../../components/AppHead";
import Description from "../../components/Description";
import ListAccounts from "./ListAccounts";
import Filter from "./Filter";
import HeadLineCenter from "../../components/HeadLineCenter";
import LoadingAnimation from "../../components/LoadingAnimation";

export default function index({ slug }) {
    return (
        <>
            <AppHead title="Danh sách acc game" />
            <div className="mb-20">
                <HeadLineCenter title="DANH MỤC GAME LIÊN QUÂN" />
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
                <LoadingAnimation>
                    <ListAccounts />
                </LoadingAnimation>
            </div>
        </>
    );
}
