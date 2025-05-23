import React from "react";
import Lucky from "./Lucky";
import MasterLayout from "../../layout/MasterLayout";
import GameLayoutHead from "../../layout/GameLayout/HeadLayout";

function LuckyWheel() {
    return (
        <>
            <Lucky />
        </>
    );
}
LuckyWheel.layout = (page) => (
    <MasterLayout>
        <GameLayoutHead title="VÒNG QUAY MAY MẮN" page="LuckyWheel">
            {page}
        </GameLayoutHead>
    </MasterLayout>
);
export default LuckyWheel;
