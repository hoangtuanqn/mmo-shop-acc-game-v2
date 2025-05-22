import React from "react";
import Description from "../../components/Description";
import OrderService from "./OrderService";
export default function index() {
    return (
        <div className="mb-20">
            <h2 className="before:bg-primary text-md relative mb-6 pb-2.5 text-center font-bold uppercase before:absolute before:bottom-0 before:left-[50%] before:h-[3px] before:w-[60px] before:transform-[translate(-50%)] before:rounded-lg md:text-2xl">
                DỊCH VỤ CÀY THUÊ ROBLOX UY TÍN
            </h2>
            <Description>
                <h2>Giới thiệu dịch vụ cày thuê</h2>
                <p>
                    Dịch vụ cày thuê giúp bạn nhanh chóng đạt thành tựu trong Roblox với đội ngũ game thủ chuyên nghiệp.
                </p>
                <ul>
                    <li>Đội ngũ giàu kinh nghiệm, phục vụ 24/7.</li>
                    <li>Cam kết bảo mật thông tin tài khoản.</li>
                    <li>Các gói dịch vụ linh hoạt, phù hợp với nhu cầu.</li>
                </ul>
            </Description>
            <OrderService />
        </div>
    );
}
