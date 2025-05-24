import React, { useCallback, useState } from "react";
import AppHead from "../../components/AppHead";
import Button from "../../components/Form/Button";
import Description from "../../components/Description";
import HeadLineCenter from "../../components/HeadLineCenter";
import Input from "../../components/Form/Input";
import MarqueeData from "../../components/MarqueeData";
import Ranking from "./Ranking";
import Select from "../../components/Form/Select";
import { BiMoneyWithdraw } from "react-icons/bi";
import { ImHistory } from "react-icons/im";
import { historiesWheel, winningSlot, messageWinning } from "./fakerData";
import { formatNumber, random, showAlert, showAlertImage } from "../../utils/functions";
import GameWheelLucky from "../GameWheelLucky";
import GameFlipCard from "../GameFlipCard";
export default function LuckyWheel({ type = "luckyWheel" }) {
    const price = 9000;
    const [deg, setDeg] = useState(0);
    const [isSpinning, setIsSpinning] = useState(false);
    const [message, setMessage] = useState("");
    const [form, setForm] = useState({
        spinCount: 1,
        giftcode: "",
    });

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
                setMessage(`${messageWinning[slot - 1].message} x ${form.spinCount} lần`);
            } else {
                showAlert("error", "Đã phát hiện có lỗi. Không nằm trong loại Chơi Thử / Chơi Thật.");
            }
        },
        [isSpinning, winningSlot, messageWinning, form],
    );
    const handleTransitionEnd = () => {
        // showAlert("success", message ? message : "Quản trị viên chưa cấu hình lời chúc mừng!");
        showAlertImage({ message });
        setIsSpinning(false);

        // Reset lại về trạng thái ban đầu
        setTimeout(() => {
            setDeg(0);
        }, 300); // đợi 1 chút để tránh chớp
    };

    const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

    return (
        <>
            <AppHead title={"VÒNG QUAY MAY MẮN"} />
            <div className="mb-20">
                <HeadLineCenter title={"VÒNG QUAY MAY MẮN"} />
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

                    <div className="order-1 lg:order-2">
                        <MarqueeData histories={historiesWheel} custom="hidden lg:flex" />
                        <section className="mb-20 rounded-xl">
                            <div className="flex flex-col items-start gap-6 lg:flex-row lg:gap-2">
                                <section className="overflow-hidden border border-gray-500 basis-2/3 rounded-xl">
                                    <div className="bg-linear-60 from-blue-500 to-purple-500 p-3.5">
                                        <h2 className="text-base font-bold text-center text-white uppercase lg:text-xl">
                                            Lật thẻ săn kim cương
                                        </h2>
                                    </div>
                                    <div className="flex flex-col items-center justify-center pb-8 bg-white">
                                        {type === "luckyWheel" && (
                                            <GameWheelLucky
                                                handlePlay={handlePlay}
                                                handleTransitionEnd={handleTransitionEnd}
                                                deg={deg}
                                                isSpinning={isSpinning}
                                            />
                                        )}
                                        {type === "flipCard" && <GameFlipCard />}
                                        <div className="w-[100%] pt-8 lg:w-[70%]">
                                            <form
                                                action=""
                                                className="flex-col w-full gap-4 ht-flex-center"
                                                onSubmit={(e) => e.preventDefault()}
                                            >
                                                <div className="flex w-full gap-2">
                                                    <div className="flex flex-col flex-1">
                                                        <label
                                                            htmlFor="sort-order"
                                                            className="font-medium text-gray-600"
                                                        >
                                                            Mua lần quay
                                                        </label>
                                                        <Select name="spinCount" id="spinCount" onChange={handleChange}>
                                                            {[1, 3, 5, 7, 10].map((index) => (
                                                                <option key={index * price} value={index}>
                                                                    Mua X{index} / {formatNumber(index * price)}đ
                                                                </option>
                                                            ))}
                                                        </Select>
                                                    </div>

                                                    <div className="flex flex-col flex-1">
                                                        <label htmlFor="code" className="font-medium text-gray-600">
                                                            Mã giảm giá
                                                        </label>
                                                        <Input
                                                            type="text"
                                                            id="giftcode"
                                                            name="giftcode"
                                                            value={form.giftcode}
                                                            onChange={handleChange}
                                                            placeholder="Mã giảm giá (Nếu có)"
                                                        />
                                                    </div>
                                                </div>
                                                <div className="flex w-full gap-2">
                                                    <Button
                                                        className="flex-1"
                                                        onClick={() => handlePlay("real")}
                                                        disabled={isSpinning}
                                                    >
                                                        <span>Chơi luôn </span>
                                                        <span className="hidden lg:block">
                                                            - {formatNumber(form.spinCount * price)}đ x {form.spinCount}{" "}
                                                            lượt
                                                        </span>
                                                    </Button>
                                                    <Button
                                                        className="flex-1"
                                                        mode="transparent"
                                                        onClick={() => handlePlay("trial")}
                                                        disabled={isSpinning}
                                                    >
                                                        Chơi thử
                                                    </Button>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </section>

                                <section className="w-full px-4 border border-gray-500 basis-1/3 rounded-xl">
                                    <div className="flex gap-2 py-4 border-b border-gray-600">
                                        <Button mode="transparent" Element="Link" href="/" className="flex-1">
                                            <ImHistory /> Lịch Sử Quay
                                        </Button>
                                        <Button className="flex-1">
                                            <BiMoneyWithdraw />
                                            Rút thưởng
                                        </Button>
                                    </div>

                                    <Ranking />
                                </section>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </>
    );
}
