function tfn(a, b, fn, msg) {
    if (!fn(a, b))
        throw new Error(msg)
    else return this;
}

function expect(a) {
    return {
        get to() { return this; },
        get be() { return this; },
        equal(b, msg) { tfn(a, b, (a, b) => a == b, msg) },
        notEqual(b, msg) { tfn(a, b, (a, b) => a != b, msg) },
        greaterThan(b, msg) { tfn(a, b, (a, b) => a > b, msg) },
        lessThan(b, msg) { tfn(a, b, (a, b) => a < b, msg) },
        greaterThanOrEqual(b, msg) { tfn(a, b, (a, b) => a >= b, msg) },
        lessThanOrEqual(b, msg) { tfn(a, b, (a, b) => a <= b, msg) },
    };
}

export { expect };
