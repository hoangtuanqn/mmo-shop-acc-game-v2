import React from "react";
import Description from "../../components/Description";
import OrderService from "./OrderService";
import HeadLineCenter from "../../components/HeadLineCenter";
import AppHead from "../../components/AppHead";
export default function index() {
    return (
        <>
            <AppHead title="DỊCH VỤ CÀY THUÊ ROBLOX UY TÍN" />
            <div className="mb-20">
                <HeadLineCenter title="DỊCH VỤ CÀY THUÊ ROBLOX UY TÍN" />
                <Description>
                    <h2>Giới thiệu dịch vụ cày thuê</h2>
                    <p>
                        Dịch vụ cày thuê giúp bạn nhanh chóng đạt thành tựu trong Roblox với đội ngũ game thủ chuyên
                        nghiệp.
                    </p>
                    <ul>
                        <li>Đội ngũ giàu kinh nghiệm, phục vụ 24/7.</li>
                        <li>Cam kết bảo mật thông tin tài khoản.</li>
                        <li>Các gói dịch vụ linh hoạt, phù hợp với nhu cầu.</li>
                    </ul>
                </Description>
                <OrderService />
            </div>
        </>
    );
}
