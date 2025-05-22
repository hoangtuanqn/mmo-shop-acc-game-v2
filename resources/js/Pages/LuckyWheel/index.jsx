import React from "react";
import AppHead from "../../components/AppHead";
import HeadLineCenter from "../../components/HeadLineCenter";
import Description from "../../components/Description";
import Lucky from "./Lucky";

export default function index() {
    return (
        <>
            <AppHead title="VÒNG QUAY MAY MẮN" />
            <div className="mb-20">
                <HeadLineCenter title="VÒNG QUAY MAY MẮN ROBLOX" />
                <div className="flex flex-col">
                    <div className="order-2 md:order-1">
                        <Description>
                            <h2>Giới thiệu về vòng quay may mắn ROBLOX</h2>
                            <p>
                                Vòng quay may mắn ROBLOX mang đến cho bạn những trải nghiệm thú vị và hấp dẫn. Với đồ
                                họa đẹp mắt và lối chơi sáng tạo, bạn sẽ không thể rời mắt khỏi màn hình.
                            </p>
                        </Description>
                    </div>

                    <div className="order-1 md:order-2">
                        <Lucky />
                    </div>
                </div>
            </div>
        </>
    );
}
