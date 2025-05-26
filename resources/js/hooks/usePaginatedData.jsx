import { useState, useEffect } from "react";

export function usePaginatedData(url, itemsPerPage = 10) {
    const [data, setData] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [pageCount, setPageCount] = useState(0);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (!url) return;

        const fetchData = async () => {
            setLoading(true);
            setError(null);
            try {
                // Giả sử API hỗ trợ query params: ?page=1&limit=10
                const response = await fetch(`${url}?page=${currentPage}&limit=${itemsPerPage}`);
                const json = await response.json();

                setData(json.data || []);
                setPageCount(Math.ceil((json.totalItems || 0) / itemsPerPage));
            } catch (err) {
                setError(err.message || "Something went wrong");
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [url, currentPage, itemsPerPage]);

    const setPage = (page) => {
        if (page >= 0 && page < pageCount) {
            setCurrentPage(page);
        }
    };

    return { data, currentPage, pageCount, loading, error, setPage };
}
