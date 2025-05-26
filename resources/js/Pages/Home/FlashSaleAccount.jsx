import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Box } from "@mui/material";
import "yet-another-react-lightbox/styles.css";
import "swiper/css";
import AccountItem from "../../components/AccountItem";
import Button from "../../components/Form/Button";
import { FcFlashOn } from "react-icons/fc";

export default function FlashSaleAccount() {
    const listAccounts = [0, 1, 2, 4, 5, 6, 7, 8, 9, 10];
    return (
        <div className="mb-20">
            <div className="overflow-hidden rounded-xl border border-gray-500 bg-white">
                <div className="bg-primary/95 flex items-center justify-between px-2 py-4">
                    <h2 className="flex items-center gap-1 text-xl font-bold text-white uppercase">
                        <img src="/images/icons/flash-sale.png" alt="" className="aspect-auto" />
                        Flash Sale
                    </h2>
                    <Button Element="Link" mode="transparent" className="text-white" href="/">
                        Xem tất cả
                        <FcFlashOn className="text-base" />
                    </Button>
                </div>
                <div className="bg-[#f1f5f9] p-2">
                    <div className="grid grid-cols-3 gap-2 overflow-hidden rounded-xl bg-white text-slate-400 md:grid-cols-6">
                        {Array.from({ length: 6 }).map((_, index) => (
                            <div
                                key={`flash-sale-${index}`}
                                className={`ht-flex-center cursor-pointer flex-col p-2 ${index === 0 ? "ht-flash-sale-active" : ""}`}
                            >
                                <span className="text-xl font-bold md:text-2xl">11:30</span>
                                <span className="text-xs font-semibold md:text-sm">Đã kết thúc</span>
                            </div>
                        ))}
                    </div>

                    <Box className="mx-auto mt-6 w-full max-w-[2200px] overflow-hidden rounded-sm">
                        <Swiper
                            spaceBetween={8}
                            breakpoints={{
                                // Điểm breakpoint lấy ở tailwind nhé =))
                                0: {
                                    slidesPerView: 1.5,
                                },
                                640: {
                                    slidesPerView: 2.5,
                                },
                                1024: {
                                    slidesPerView: 3.5,
                                },
                                1280: {
                                    slidesPerView: 4.5,
                                },
                            }}
                        >
                            <div className="pointer-events-none absolute top-0 right-0 z-10 h-full w-12 bg-gradient-to-l from-white to-transparent" />
                            {/* Ưu tiên hiển thị những acc chưa bán - Acc đã bán rồi dồn về sau nếu ít - ẩn đi cho những acc chưa bán nếu nhiều */}
                            {listAccounts.map((account, index) => (
                                <SwiperSlide key={`Accont-Game-${index}`}>
                                    <div className="relative">
                                        <div className={`${index === 1 ? "ht-sold-out" : ""}`}>
                                            <AccountItem key={`Account-${index}`} account={account} />
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </Box>
                </div>
            </div>
        </div>
    );
}
