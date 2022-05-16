export function strictEquals(a, b) {
    if (isNaN(a) || isNaN(b)) {
        return false;
    } else if (Object.is(a * b, -0)) {
        return true;
    }

    return Object.is(a, b);
}
