import React, { memo } from "react";
import { FaFileImage } from "react-icons/fa";
import { IoMdArrowBack } from "react-icons/io";
import { IoArrowForward } from "react-icons/io5";

export default function PrevNextImage({ handleClick, images, idPreviewLive }) {
    return (
        <div className="ht-flex-center mt-6 justify-between text-xs md:text-sm">
            <div className="ht-flex-center justify-between gap-2 md:gap-4">
                <div
                    className="text-primary border-primary hover:bg-primary cursor-pointer rounded-full border-2 bg-white p-1.5 duration-75 hover:text-white md:p-2"
                    onClick={() => handleClick("prev")}
                >
                    <IoMdArrowBack />
                </div>
                <div
                    className="text-primary border-primary hover:bg-primary cursor-pointer rounded-full border-2 bg-white p-1.5 duration-75 hover:text-white md:p-2"
                    onClick={() => handleClick("next")}
                >
                    <IoArrowForward />
                </div>
            </div>
            <div className="ht-flex-center border-primary gap-2 rounded-lg border px-6 py-1 md:py-2">
                <FaFileImage />
                <span>
                    {idPreviewLive + 1} / {images.length}
                </span>
            </div>
        </div>
    );
}
