import React, { memo, useEffect, useRef, useState } from "react";
import { Commet } from "react-loading-indicators";

function LoadingAnimation({ children, ms = 200 }) {
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, ms);
        return () => clearTimeout(timer);
    }, []);
    return loading ? (
        <>
            <div className="flex justify-center w-full mt-4">
                <Commet color={["#32cd32", "#327fcd", "#cd32cd", "#cd8032"]} />
            </div>
        </>
    ) : (
        children
    );
}
export default memo(LoadingAnimation);
