function pweeze(msg, fn = () => { console.log("all tests fail, yoo must apowojize!") }) {
    fn();
};

function it(msg, fn = () => console.log("i do nothing...")) {
    console.log(`\ntesting ${msg}`);
    fn();
}

function expect(a) {
    let n = true;

    function toggle(x) {
        return n ? x : !x;
    }

    function tfn(a, b, fn, msg) {
        if (!toggle(fn(a, b))) {
            console.log(`test failed ${msg}`);
        } else {
            console.log(`test passed ${msg}`);
        }
    }

    return {
        get to() { return this; },
        get be() { return this; },
        get not() { n = !n; return this; },
        equal(b, msg = `${a} == ${b}`) { tfn(a, b, (a, b) => a == b, msg); return this; },
        notEqual(b, msg = `${a} != ${b}`) { tfn(a, b, (a, b) => a != b, msg); return this; },
        greaterThan(b, msg = `${a} > ${b}`) { tfn(a, b, (a, b) => a > b, msg); return this; },
        lessThan(b, msg = `${a} < ${b}`) { tfn(a, b, (a, b) => a < b, msg); return this; },
        greaterThanOrEqual(b, msg = `${a} >= ${b}`) { tfn(a, b, (a, b) => a >= b, msg); return this; },
        lessThanOrEqual(b, msg = `${a} <= ${b}`) { tfn(a, b, (a, b) => a <= b, msg); return this; },
        get apowojize() { return this; }
    };
}

export { pweeze, it, expect };
