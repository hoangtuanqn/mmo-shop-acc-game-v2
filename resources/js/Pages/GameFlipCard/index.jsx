import React, { use, useEffect, useState } from "react";
import { showAlert } from "../../utils/functions";
import { Commet } from "react-loading-indicators";

export default function GameFlipCard() {
    const [isClick, setIsClick] = useState(false);
    const [flippedCards, setFlippedCards] = useState(Array(9).fill(false));

    const handleClick = (index) => {
        if (isClick) return;
        setIsClick(true);
        setFlippedCards((prev) => {
            const newFlipped = prev.map((flipped, i) => (i === index ? !flipped : flipped));
            return newFlipped;
        });
    };
    useEffect(() => {
        let timer1, timer2;
        if (isClick) {
            timer1 = setTimeout(() => {
                showAlert("success", "Chúc mừng bạn đã trúng thưởng");
            }, 1400);
            timer2 = setTimeout(() => {
                setFlippedCards(Array(9).fill(true));
            }, 1800);
        }
        return () => {
            if (timer1) clearTimeout(timer1);
            if (timer2) clearTimeout(timer2);
        };
    }, [isClick]);

    return (
        <div className="bg-no-repet grid w-full grid-cols-3 place-items-center gap-4 bg-[url(https://freefiremobile-a.akamaihd.net/common/web_event/official2.ff.garena.all/img/20228/65fef1213324415a00e170bef3a51e2b.jpg)] bg-center p-8">
            {flippedCards.map((isFlipped, index) => (
                <div
                    key={`flip-card-${index}`}
                    className="hover:animate-shake h-[240px] w-[180px] cursor-pointer overflow-hidden [perspective:1000px]"
                    onClick={() => handleClick(index)}
                >
                    <div
                        className="relative h-full w-full transition-transform duration-500"
                        style={{
                            transformStyle: "preserve-3d",
                            transform: isFlipped ? "rotateY(180deg)" : "rotateY(0deg)",
                        }}
                    >
                        {/* Mặt trước */}
                        <div
                            className="absolute h-full w-full overflow-hidden rounded"
                            style={{ backfaceVisibility: "hidden" }}
                        >
                            <img
                                src="/images/faker/flip-card/cardBack.png"
                                alt="Mặt sau"
                                className="h-full w-full object-cover"
                            />
                        </div>

                        {/* Mặt sau */}
                        <div
                            className="absolute h-full w-full overflow-hidden rounded"
                            style={{
                                backfaceVisibility: "hidden",
                                transform: "rotateY(180deg)",
                            }}
                        >
                            <img
                                src="https://cdn3.upanh.info/upload/server-sw3/images/500%20KC(2).jpg"
                                alt="Mặt trước"
                                className="h-full w-full object-cover"
                            />
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}
