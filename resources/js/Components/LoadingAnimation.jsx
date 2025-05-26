import React, { memo, useEffect, useRef, useState } from "react";
import { Commet } from "react-loading-indicators";

function LoadingAnimation({ children, ms = 200, infinite = false }) {
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        if (!infinite) {
            const timer = setTimeout(() => {
                setLoading(false);
            }, ms);
            return () => clearTimeout(timer);
        }
    }, [infinite, ms]);
    return loading ? (
        <>
            <div className="mt-4 flex w-full justify-center">
                <Commet color={["#32cd32", "#327fcd", "#cd32cd", "#cd8032"]} />
            </div>
        </>
    ) : (
        children
    );
}
export default memo(LoadingAnimation);
