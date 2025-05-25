import React from "react";
import HeadLine from "../../../components/Headline";

export default function DepositCard() {
    return (
        <div className="mx-auto rounded-3xl border border-gray-100 bg-white px-7 py-8 shadow-xs">
            <HeadLine title={"Đổi mật khẩu"} customHeading="md:text-xl" />
            <div className="mt-8 flex flex-col gap-8">
                <form action=""></form>
            </div>
        </div>
    );
}
