import React, { memo } from "react";

function ActionFixedBottom({ action: handlePlay }) {

    return (
        <div className="fixed bottom-0 left-0 right-0 hidden gap-2 p-4 bg-white ht-flex-center z-200 max-md:flex">
            <button className="flex-1 ht-button-color-primary" onClick={() => handlePlay("real")}>
                Chơi thật
            </button>
            <button className="flex-1 ht-button-transparent" onClick={() => handlePlay("trial")}>
                Chơi thử
            </button>
        </div>
    );
}
export default memo(ActionFixedBottom);
