import React, { memo } from "react";
import Button from "../../components/Form/Button";

function ActionFixedBottom({ action: handlePlay, isPending }) {
    return (
        <div className="ht-flex-center fixed right-0 bottom-0 left-0 z-200 hidden gap-2 bg-white p-4 max-md:flex">
            <Button onClick={() => handlePlay("real")} disabled={isPending}>
                Chơi thật
            </Button>
            <Button onClick={() => handlePlay("trial")} mode="transparent" disabled={isPending}>
                Chơi thử
            </Button>
        </div>
    );
}
export default memo(ActionFixedBottom);
