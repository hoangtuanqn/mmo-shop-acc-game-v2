import React, { useState } from "react";
import clsx from "clsx";
import { HiEye } from "react-icons/hi";
import { BsEyeSlashFill } from "react-icons/bs";
export default function Input({ id = "", type = "text", disabled = false, className = "", ...props }) {
    const [isShowPassword, setIsShowPasssword] = useState(false);
    return (
        <>
            <input
                type={isShowPassword ? "text" : type}
                className={clsx(
                    "mt-2 h-full w-full rounded-lg border border-gray-300 px-4 py-2 text-gray-600 duration-400 " +
                        (disabled ? "ht-disabled" : " bg-white"),
                    className,
                )}
                id={id}
                disabled={disabled}
                {...props}
            />
            {type === "password" ? (
                <>
                    {isShowPassword ? (
                        <BsEyeSlashFill
                            className="ht-icon absolute top-[35%] right-4 cursor-pointer"
                            onClick={() => setIsShowPasssword(false)}
                        />
                    ) : (
                        <HiEye
                            className="ht-icon trans absolute top-[35%] right-4 cursor-pointer"
                            onClick={() => setIsShowPasssword(true)}
                        />
                    )}
                </>
            ) : (
                ""
            )}
        </>
    );
}
