export function formatNumber(amount) {
    return new Intl.NumberFormat("en-US").format(amount);
}
export function subString(string) {
    const length = string.length;
    return string.substring(0, length - 3) + "***";
}
