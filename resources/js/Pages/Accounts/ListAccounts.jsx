import React from "react";
import EmptyMesssage from "../../components/EmptyMesssage";
import AccountItem from "../../components/AccountItem";

export default function ListAccounts() {
    const listAccounts = [0, 1, 2, 3, 4, 5, 6, 8, 9, 10];
    // const listAccounts = [];
    return (
        <div className="grid grid-cols-2 gap-x-1.5 gap-y-6 md:grid-cols-3 md:gap-x-2.5 lg:grid-cols-4">
            {listAccounts.length > 0 ? (
                listAccounts.map((account, index) => <AccountItem key={`Account-${index}`} account={account} />)
            ) : (
                <EmptyMesssage message="Hiện tại không tìm thấy tài khoản nào" />
            )}
        </div>
    );
}
