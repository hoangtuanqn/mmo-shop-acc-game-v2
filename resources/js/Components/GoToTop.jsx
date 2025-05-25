import React, { useEffect, useState } from "react";
import { BiSolidArrowToTop } from "react-icons/bi";
export default function GoToTop() {
    const [isVisible, setIsVisible] = useState(false);

    // Kiểm tra vị trí cuộn
    useEffect(() => {
        const toggleVisibility = () => {
            if (window.pageYOffset > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener("scroll", toggleVisibility);
        return () => window.removeEventListener("scroll", toggleVisibility);
    }, []);
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth", // Cuộn mượt
        });
    };
    return (
        isVisible && (
            <button
                onClick={scrollToTop}
                className="bg-primary hover:text-primary border-primary fixed right-5 bottom-15 cursor-pointer rounded-full border p-3 text-base text-white duration-200 hover:bg-white md:right-10 md:p-4 md:text-xl"
            >
                <BiSolidArrowToTop />
            </button>
        )
    );
}
