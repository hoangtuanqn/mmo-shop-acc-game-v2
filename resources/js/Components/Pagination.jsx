// Pagination.js
import React from "react";
import ReactPaginate from "react-paginate";

export default function Pagination({ pageCount = 1, currentPage = 1, onPageChange }) {
    return (
        <div className="flex-column flex flex-wrap items-center justify-between p-4 md:flex-row">
            <span className="mb-4 block w-full text-sm font-normal text-gray-500 md:mb-0 md:inline md:w-auto dark:text-gray-400">
                Showing{" "}
                <span className="font-semibold text-gray-900 dark:text-white">
                    {/* {offset + 1}-{Math.min(offset + itemsPerPage, allData.length)} */}
                </span>{" "}
                {/* of <span className="font-semibold text-gray-900 dark:text-white">{allData.length}</span> */}
            </span>

            <ReactPaginate
                pageCount={pageCount}
                pageRangeDisplayed={5}
                marginPagesDisplayed={1}
                onPageChange={onPageChange}
                breakLabel="..."
                nextLabel="Next"
                previousLabel="Previous"
                containerClassName="inline-flex h-8 -space-x-px text-sm rtl:space-x-reverse"
                pageClassName="text-center flex items-center justify-center border border-gray-300 text-gray-500 cursor-pointer"
                pageLinkClassName="px-3 py-1"
                activeClassName="font-semibold text-white bg-primary"
                previousClassName="ms-0 text-center flex items-center justify-center rounded-s-lg border border-gray-300 text-gray-500 cursor-pointer"
                previousLinkClassName="px-3 py-1"
                nextClassName="text-center flex items-center justify-center rounded-e-lg border border-gray-300 text-gray-500 cursor-pointer"
                nextLinkClassName="px-3 py-1"
                breakClassName="px-3 py-1 text-center flex items-center justify-center border border-gray-300 text-gray-500 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400"
            />
        </div>
    );
}
