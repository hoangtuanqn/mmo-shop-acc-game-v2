import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Box } from "@mui/material";
import "yet-another-react-lightbox/styles.css";
import "swiper/css";
import AccountItem from "../../components/AccountItem";

export default function SuggestAccount() {
    const listAccounts = [0, 1, 2, 4, 5, 6, 7, 8, 9, 10];
    return (
        <div className="w-full overflow-x-auto">
            <Box className="mx-auto mt-2 w-full max-w-[2200px] overflow-hidden rounded-sm">
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
                    {listAccounts.map((account, index) => (
                        <SwiperSlide key={`Accont-Game-${index}`}>
                            <AccountItem key={`Account-${index}`} account={account} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </Box>
        </div>
    );
}
