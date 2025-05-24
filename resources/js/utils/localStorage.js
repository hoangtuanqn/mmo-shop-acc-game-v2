export function setItem(name, value) {
    localStorage.setItem(name, JSON.stringify(value));
}

export function getItem(name) {
    const item = localStorage.getItem(name);
    return item ? JSON.parse(item) : null;
}
