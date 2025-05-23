import React from "react";
import AppHead from "../../components/AppHead";
import HeadLineCenter from "../../components/HeadLineCenter";
import Description from "../../components/Description";

export default function GameLayout({ children, title }) {
    return (
        <>
            <AppHead title={title} />
            <div className="mb-20">
                <HeadLineCenter title={title} />
                <div className="flex flex-col">
                    <div className="order-2 lg:order-1">
                        <Description>
                            <h2>Giới thiệu về vòng quay may mắn ROBLOX</h2>
                            <p>
                                Vòng quay may mắn ROBLOX mang đến cho bạn những trải nghiệm thú vị và hấp dẫn. Với đồ
                                họa đẹp mắt và lối chơi sáng tạo, bạn sẽ không thể rời mắt khỏi màn hình.
                            </p>
                        </Description>
                    </div>

                    <div className="order-1 lg:order-2">{children}</div>
                </div>
            </div>
        </>
    );
}
