import React, { useState } from "react";
import { Link } from "@inertiajs/react";
import { route } from "ziggy-js";

export default function Gift() {
    const [isShow] = useState(false);

    return (
        <>
            {isShow && (
                <Link href={route("auth.login")} title="Click để nhận thưởng!" id="bonus_login">
                    <img src="/images/gift-home.gif" width="500px" className="w-[100%]" />
                </Link>
            )}
        </>
    );
}
