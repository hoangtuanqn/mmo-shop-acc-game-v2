import React, { useCallback, useState } from "react";
import MarqueeData from "../../components/MarqueeData";
import Ranking from "./Ranking";
import ActionFixedBottom from "./ActionFixedBottom";
import Input from "../../components/Form/Input";
import Select from "../../components/Form/Select";
import ButtonButton from "../../components/Form/Button";
import { ImHistory } from "react-icons/im";
import { BiMoneyWithdraw } from "react-icons/bi";
import { formatNumber, random, showAlert } from "../../utils/functions";
import { winningSlot, messageWinning, historiesWheel } from "./fakerData";
import Button from "../../components/Form/Button";
export default function Lucky({ price = 9000 }) {
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
        showAlert("success", message ? message : "Quản trị viên chưa cấu hình lời chúc mừng!");
        setIsSpinning(false);

        // Reset lại về trạng thái ban đầu
        setTimeout(() => {
            setDeg(0);
        }, 300); // đợi 1 chút để tránh chớp
    };

    const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });
    return (
        <>
            <ActionFixedBottom action={handlePlay} isPending={isSpinning} />
            <section className="mb-20 rounded-xl">
                <MarqueeData histories={historiesWheel} custom="hidden lg:flex" />
                <div className="flex flex-col items-start gap-2 lg:flex-row">
                    <section className="basis-2/3 overflow-hidden rounded-xl border border-gray-500">
                        <div className="bg-linear-60 from-blue-500 to-purple-500 p-4">
                            <h2 className="text-center text-base font-bold text-white lg:text-2xl">
                                Lật thẻ săn kim cương
                            </h2>
                        </div>
                        <div className="flex flex-col items-center justify-center bg-white p-4 py-8">
                            <div className="flex items-center justify-center">
                                <div className="relative flex aspect-square w-[100%] md:min-w-[550px] lg:w-[70%]">
                                    <img
                                        // src="https://s3-hcm-r1.s3cloud.vn/mandan/imgsv3_ZM9w1h8sNHIO4Kc.png"
                                        // src="https://s3-hcm-r1.s3cloud.vn/mandan/imgsv3_VDc2SUjRHx2Rb90.png"
                                        src="/images/faker/wheel-1.png"
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
                            <div className="w-[100%] pt-8 lg:w-[70%]">
                                <form
                                    action=""
                                    className="ht-flex-center w-full flex-col gap-4"
                                    onSubmit={(e) => e.preventDefault()}
                                >
                                    <div className="flex w-full gap-2">
                                        <div className="flex flex-1 flex-col">
                                            <label htmlFor="sort-order" className="font-medium text-gray-600">
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

                                        <div className="flex flex-1 flex-col">
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
                                        <ButtonButton onClick={() => handlePlay("real")} disabled={isSpinning}>
                                            <span>Quay luôn </span>
                                            <span className="hidden lg:block">
                                                - {formatNumber(form.spinCount * price)}đ x {form.spinCount} lượt
                                            </span>
                                        </ButtonButton>
                                        <Button
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
                    <section className="basis-1/3 rounded-xl border border-gray-500 px-4">
                        <div className="flex gap-2 border-b border-gray-600 py-4">
                            <Button mode="transparent" Element="Link" href="/">
                                <ImHistory /> Lịch Sử Quay
                            </Button>
                            <ButtonButton>
                                <BiMoneyWithdraw />
                                Rút thưởng
                            </ButtonButton>
                        </div>

                        <Ranking />
                    </section>
                </div>
            </section>
        </>
    );
}
