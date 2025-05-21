import React from "react";
import { Head } from "@inertiajs/react";

const AppHead = ({ title, children }) => {
    return (
        <Head>
            <title>{title ? title : "HTUANQN FPT"}</title>
            {children}
        </Head>
    );
};

export default AppHead;
