import React from "react";
function Lucky({ handleTransitionEnd, deg, isSpinning, handlePlay }) {
    return (
        <>
            <div className="flex items-center justify-center p-8">
                <div className="relative flex aspect-square w-full md:min-w-[550px] lg:w-[70%]">
                    <img
                        // src="https://s3-hcm-r1.s3cloud.vn/mandan/imgsv3_ZM9w1h8sNHIO4Kc.png"
                        // src="https://s3-hcm-r1.s3cloud.vn/mandan/imgsv3_VDc2SUjRHx2Rb90.png"
                        src="/images/faker/wheel-1.png"
                        alt="Lật thẻ săn kim cương"
                        onTransitionEnd={handleTransitionEnd}
                        style={{
                            transform: `rotate(${deg}deg)`,
                            transition: isSpinning ? `transform 6s cubic-bezier(0.33, 1, 0.68, 1)` : `none`,
                        }}
                        className="object-cover"
                    />
                    <div
                        className="absolute top-[50%] left-[50%] w-[15%] transform-[translate(-50%,-50%)] cursor-pointer"
                        onClick={() => handlePlay("real")}
                    >
                        <img src="/images/icons/play.png" alt="Icon play game" className="w-full h-full" />
                    </div>
                </div>
            </div>
        </>
    );
}
export default Lucky;
