import React, { useState } from "react";
import { MdOutlineChangeCircle } from "react-icons/md";
import ProfileLayout from "../../../layout/ProfileLayout";
import HeadLine from "../../../components/Headline";
import MasterLayout from "../../../layout/MasterLayout";
import Input from "../../../components/Form/Input";
import Button from "../../../components/Form/Button";
import { showAlert } from "../../../utils/functions";
function ChangePassword() {
    const [form, setForm] = useState({
        oldPassword: "",
        newPassword: "",
        confirmPassword: "",
    });
    const handleChange = (e) =>
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        });
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(form);

        showAlert("success", "Đã đổi mật khẩu thành công");
    };
    return (
        <div className="mx-auto rounded-3xl border border-gray-100 bg-white px-7 py-8 shadow-xs">
            <HeadLine title={"Đổi mật khẩu"} customHeading="md:text-xl" />
            <div className="flex flex-col gap-8">
                <form action="" className="flex flex-col gap-4" onSubmit={handleSubmit}>
                    <div className="relative flex flex-1 flex-col">
                        <label htmlFor="game_account" className="font-medium text-gray-600">
                            Mật khẩu cũ
                        </label>
                        <div className="relative">
                            <Input
                                type="password"
                                placeholder="Mật khẩu cũ của bạn"
                                id="oldPassword"
                                name="oldPassword"
                                onChange={handleChange}
                                required
                            />
                        </div>
                    </div>
                    <div className="flex flex-1 flex-col">
                        <label htmlFor="game_account" className="font-medium text-gray-600">
                            Mật khẩu mới
                        </label>
                        <div className="relative">
                            <Input
                                type="password"
                                placeholder="Mật khẩu mới của bạn"
                                id="newPassword"
                                name="newPassword"
                                onChange={handleChange}
                                required
                            />
                        </div>
                    </div>
                    <div className="flex flex-1 flex-col">
                        <label htmlFor="game_account" className="font-medium text-gray-600">
                            Nhập lại mật khẩu
                        </label>
                        <div className="relative">
                            <Input
                                type="password"
                                id="confirmPassword"
                                placeholder="Nhập lại mật khẩu mới của bạn"
                                name="confirmPassword"
                                onChange={handleChange}
                                required
                            />
                        </div>
                    </div>
                    <Button>
                        <MdOutlineChangeCircle />
                        Xác nhận
                    </Button>
                </form>
            </div>
        </div>
    );
}

ChangePassword.layout = (page) => (
    <MasterLayout>
        <ProfileLayout>{page}</ProfileLayout>
    </MasterLayout>
);
export default ChangePassword;
