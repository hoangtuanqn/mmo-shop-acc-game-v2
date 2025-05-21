import Swal from "sweetalert2";

export function formatNumber(amount) {
    return new Intl.NumberFormat("en-US").format(amount);
}
export function subString(string) {
    const length = string.length;
    return string.substring(0, length - 3) + "***";
}
export function showAlert(status = "success", message) {
    const title = {
        success: "Thành công!",
        error: "Có lỗi!",
    };
    return Swal.fire({
        title: title[status],
        text: message,
        icon: status,
    });
}
