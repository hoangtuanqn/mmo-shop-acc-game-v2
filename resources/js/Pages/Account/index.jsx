import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { Box } from "@mui/material";
import "swiper/css";
import DescriptionAccount from "./DescriptionAccount";
import PrevNextImage from "./PrevNextImage";
export default function Account() {
    const [idPreviewLive, setIdPreviewLive] = useState(0);
    const swiperRef = useRef(null);
    const images = Array.from({ length: 18 }, (_, i) => ({
        src: `/images/faker/free-fire/image-${i + 1}.jpg`,
    }));
    const handleClick = (action) => {
        setIdPreviewLive(() => {
            let idNew = action === "prev" ? idPreviewLive - 1 : idPreviewLive + 1;
            setIdPreviewLive(idNew < 0 ? images.length - 1 : idNew >= images.length ? 0 : idNew);
            return idNew < 0 ? images.length - 1 : idNew >= images.length ? 0 : idNew;
        });
    };
    const payload = { handleClick, images, idPreviewLive };
    useEffect(() => {
        const swiper = swiperRef.current;
        if (swiper) {
            const offset = Math.floor((swiper.params.slidesPerView || 1) / 2);
            swiper.slideTo(Math.max(idPreviewLive - offset, 0), 300);
        }
    }, [idPreviewLive]);
    const [open, setOpen] = useState(false);

    return (
        <>
            <div className="mb-20">
                <div className="flex flex-col items-start gap-4 lg:flex-row lg:gap-2">
                    <div className="max-h-[75%] max-w-full overflow-hidden rounded-xl bg-white p-4 shadow-sm lg:basis-7/12">
                        <div onClick={() => setOpen(true)} className="cursor-pointer">
                            <img
                                src={images[idPreviewLive].src}
                                alt="Chi tiết Acc Game"
                                className="rounded-sm object-cover"
                            />
                        </div>
                        <div className="w-full overflow-hidden">
                            <Box className="mx-auto mt-2 w-full max-w-[2200px] overflow-hidden rounded-sm">
                                <Swiper
                                    onSwiper={(swiper) => (swiperRef.current = swiper)}
                                    spaceBetween={5}
                                    breakpoints={{
                                        // Điểm breakpoint lấy ở tailwind nhé =))
                                        0: {
                                            slidesPerView: 4.5,
                                        },
                                        768: {
                                            slidesPerView: 6.5,
                                        },
                                    }}
                                >
                                    {images.map(({ src }, index) => (
                                        <SwiperSlide key={`Accont-Game-${src}`}>
                                            <img
                                                src={src}
                                                alt={`Ảnh ${index}`}
                                                loading="lazy"
                                                onClick={() => {
                                                    setIdPreviewLive(index);
                                                    setOpen(true);
                                                }}
                                                className={`h-auto w-full cursor-pointer rounded-sm transition-all duration-200 ${
                                                    idPreviewLive === index
                                                        ? "scale-105 border-2 border-pink-500"
                                                        : "border border-gray-200"
                                                }`}
                                            />
                                        </SwiperSlide>
                                    ))}
                                </Swiper>
                            </Box>
                            <PrevNextImage {...payload} />
                        </div>
                    </div>
                    <DescriptionAccount />
                </div>
            </div>
            <Lightbox
                open={open}
                close={() => setOpen(false)}
                slides={images}
                index={idPreviewLive}
                on={{ view: ({ index }) => setIdPreviewLive(index) }}
            />
        </>
    );
}
