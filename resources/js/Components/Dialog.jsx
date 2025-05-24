import React from "react";
import { useState } from "react";
import Button from "./Form/Button";

export default function Dialog({ title = "Xác Nhận Thông Tin", children, actionAccept = () => {}, isShow = () => {} }) {
    const [showNotice, setShowNotice] = useState(true);
    const handleClose = (e) => {
        const isClose = e.target.getAttribute("name") === "close";
        setShowNotice(!isClose);
        isClose && isShow(false);
    };
    return (
        showNotice && (
            <div
                className="bg-opacity-70 fixed inset-0 top-0 z-50 mx-auto flex h-full w-full items-center justify-center bg-[#0006]"
                name="close"
                onClick={handleClose}
            >
                <div
                    className="animate-scaleUp h-fit max-h-[90vh] w-[90%] max-w-[400px] overflow-hidden rounded-lg bg-gradient-to-br from-white to-[#f5f8ff] p-6 shadow-lg"
                    onClick={(e) => e.stopPropagation()}
                >
                    <h2 className="text-primary ht-flex-center gap-x-2 border-b border-gray-200 pb-4 text-center text-sm font-extrabold uppercase">
                        {title}
                    </h2>
                    <div className="content text-md mt-2 max-h-[70vh] overflow-y-auto py-4 leading-6 text-gray-700">
                        {children}
                    </div>
                    <div className="close_popup flex justify-center gap-2 border-t border-gray-200 md:justify-end">
                        <Button className="mt-4" name="close" mode="transparent" onClick={handleClose}>
                            Hủy bỏ
                        </Button>
                        <Button className="mt-4" onClick={() => actionAccept()}>
                            Xác Nhận
                        </Button>
                    </div>
                </div>
            </div>
        )
    );
}
