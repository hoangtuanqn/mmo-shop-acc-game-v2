import React from "react";
import { ImHistory } from "react-icons/im";
import { BiMoneyWithdraw } from "react-icons/bi";
import Ranking from "../../Pages/LuckyWheel/Ranking";
import { historiesWheel } from "../../Pages/LuckyWheel/fakerData";
import MarqueeData from "../../components/MarqueeData";
import Button from "../../components/Form/Button";

export default function BodyLayout({ children }) {
    return (
        <>
            {/* <ActionFixedBottom action={handlePlay} isPending={isSpinning} /> */}
            <MarqueeData histories={historiesWheel} custom="hidden lg:flex" />
            <section className="mb-20 rounded-xl">
                <div className="flex flex-col items-start gap-2 lg:flex-row">
                    {children}
                    <section className="basis-1/3 rounded-xl border border-gray-500 px-4">
                        <div className="flex gap-2 border-b border-gray-600 py-4">
                            <Button mode="transparent" Element="Link" href="/">
                                <ImHistory /> Lịch Sử Quay
                            </Button>
                            <Button>
                                <BiMoneyWithdraw />
                                Rút thưởng
                            </Button>
                        </div>

                        <Ranking />
                    </section>
                </div>
            </section>
        </>
    );
}
