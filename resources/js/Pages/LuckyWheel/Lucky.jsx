import React, { useCallback, useState } from "react";
import { histories } from "../Home/fakerData";
import MarqueeData from "../../components/MarqueeData";
import Ranking from "./Ranking";
import { random, showAlert } from "../../utils/functions";
import { winningSlot, messageWinning } from "./fakerData";
import ActionFixedBottom from "./ActionFixedBottom";
// Phát âm thanh khi quay
// Thay đổi hình ảnh khi quay
export default function Lucky() {
    const [deg, setDeg] = useState(0);
    const [isSpinning, setIsSpinning] = useState(false);
    const [message, setMessage] = useState("");

    const handleSpin = (winningSlot) => {
        setIsSpinning(true);

        const totalRotationDegrees = 10 * 360; // Tạo hiệu ứng quay 10 vòng trước khi quay vô ô trúng thưởng
        const winningSlotRotationDegrees = (winningSlot - 1) * 45; // Tính toán góc của ô trúng thưởng
        const randomDeviation = random(0, 12) + Math.random(); // cộng thêm 1 vài độ lệch để tạo cảm giác (nhưng không được vượt qua ô trúng thưởng)
        setDeg(totalRotationDegrees - winningSlotRotationDegrees + randomDeviation);
    };

    const handlePlay = useCallback(
        (mode) => {
            if (isSpinning) return;
            if (mode === "trial" || mode === "real") {
                const slot = winningSlot[mode];
                handleSpin(slot);
                setMessage(messageWinning[slot - 1].message);
            } else {
                showAlert("error", "Đã phát hiện có lỗi. Không nằm trong loại Chơi Thử / Chơi Thật.");
            }
        },
        [isSpinning, winningSlot, messageWinning],
    );
    const handleTransitionEnd = () => {
        showAlert("success", message ? message : "Quản trị viên chưa cấu hình lời chúc mừng!");
        setIsSpinning(false);

        // Reset lại về trạng thái ban đầu
        setTimeout(() => {
            setDeg(0);
        }, 300); // đợi 1 chút để tránh chớp
    };

    return (
        <>
            <ActionFixedBottom action={handlePlay} />
            <section className="mb-20 rounded-xl">
                <MarqueeData histories={histories} custom="hidden lg:flex" />
                <div className="flex flex-col gap-2 lg:flex-row">
                    <section className="h-full basis-2/3 overflow-hidden rounded-xl border border-gray-500">
                        <div className="bg-linear-60 from-blue-500 to-purple-500 p-4">
                            <h2 className="text-center text-base font-bold text-white lg:text-2xl">
                                Lật thẻ săn kim cương
                            </h2>
                        </div>
                        <div className="flex items-center justify-center bg-white p-4 py-8">
                            <div className="flex items-center justify-center">
                                <div className="aspect-squarew-[100%] min-w-[710px relative flex lg:w-[90%]">
                                    <img
                                        // src="https://s3-hcm-r1.s3cloud.vn/mandan/imgsv3_ZM9w1h8sNHIO4Kc.png"
                                        // src="https://s3-hcm-r1.s3cloud.vn/mandan/imgsv3_VDc2SUjRHx2Rb90.png"
                                        src="https://i.imgur.com/D1BD4Vn.png"
                                        alt=""
                                        onTransitionEnd={handleTransitionEnd}
                                        style={{
                                            transform: `rotate(${deg}deg)`,
                                            transition: isSpinning
                                                ? `transform 6s cubic-bezier(0.33, 1, 0.68, 1)`
                                                : `none`,
                                        }}
                                        className="object-cover"
                                    />
                                    <div
                                        className="absolute top-[50%] left-[50%] w-[15%] transform-[translate(-50%,-50%)] cursor-pointer"
                                        onClick={() => handlePlay("real")}
                                    >
                                        <img
                                            src="/images/icons/play.png"
                                            alt="Icon play game"
                                            className="h-full w-full"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="basis-1/3 rounded-xl border border-gray-500 px-4">
                        <div className="flex gap-2 py-4">
                            <a href="#" className="ht-button-transparent flex-1">
                                Lịch Sử Quay
                            </a>
                            <a href="#" className="ht-button-color-primary flex-1">
                                Rút thưởng
                            </a>
                        </div>
                        <div className="mb-2 hidden gap-2 border-b border-gray-600 pb-4 md:flex">
                            <button
                                onClick={() => handlePlay("trial")}
                                className="ht-button-color-primary from-pink-second to-primary hover:to-pink-second hover:from-primary flex-1 bg-linear-145 duration-200"
                            >
                                Chơi thử
                            </button>
                        </div>
                        <Ranking />
                    </section>
                </div>
            </section>
        </>
    );
}
