function expect(a) {
    let logicToggle = true;

    function toggle(x) {
        return logicToggle ? x : !x;
    }

    function tfn(a, b, fn, msg) {
        if (!toggle(fn(a, b)))
            console.log(`test failed ${msg}`)
        else
            console.log("test passed");
        return this;
    }

    return {
        get to() { return this; },
        get be() { return this; },
        get not() { logicToggle = !logicToggle; return this; },
        equal(b, msg = `${a} == ${b}`) { tfn(a, b, (a, b) => a == b, msg) },
        notEqual(b, msg = `${a} != ${b}`) { tfn(a, b, (a, b) => a != b, msg) },
        greaterThan(b, msg = `${a} > ${b}`) { tfn(a, b, (a, b) => a > b, msg) },
        lessThan(b, msg = `${a} < ${b}`) { tfn(a, b, (a, b) => a < b, msg) },
        greaterThanOrEqual(b, msg = `${a} >= ${b}`) { tfn(a, b, (a, b) => a >= b, msg) },
        lessThanOrEqual(b, msg = `${a} <= ${b}`) { tfn(a, b, (a, b) => a <= b, msg) },
    };
}

export { expect };
