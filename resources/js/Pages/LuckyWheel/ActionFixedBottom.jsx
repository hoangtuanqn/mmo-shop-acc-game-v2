import React, { memo } from "react";

function ActionFixedBottom({ action: handlePlay }) {
    console.log("render");

    return (
        <div className="ht-flex-center fixed right-0 bottom-0 left-0 z-200 hidden gap-2 bg-white p-4 max-md:flex">
            <button className="ht-button-color-primary flex-1" onClick={() => handlePlay("real")}>
                Chơi thật
            </button>
            <button className="ht-button-transparent flex-1" onClick={() => handlePlay("trial")}>
                Chơi thử
            </button>
        </div>
    );
}
export default memo(ActionFixedBottom);
