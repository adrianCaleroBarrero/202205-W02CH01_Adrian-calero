export function strictEquals(a, b) {
    if (isNaN(a) || isNaN(b)) {
        return false;
    } else if (!a && !b) {
        return true;
    }

    return Object.is(a, b);
}
