const noop = () => { };

function Asserts(ctx) {
    return {
        expect(a) {
            let n = true;
            let apowogise = false;
            let prepend = "";
            let e;

            function notter(x) {
                return n ? x : !x;
            }

            function apowogised(x) {
                return apowogise ? x : !x;
            }

            function tfn(msg, fn) {
                const result = ctx.da ? ctx.da : (ctx.pweeze ? apowogised(notter(fn())) : notter(fn()));
                ctx.tests.push({ name: ctx.name, test: `${prepend}${msg}`, result: result, apowogise: apowogise });
            }

            function areArrays(a, b) {
                return Array.isArray(a) && Array.isArray(b)
            };

            function areSets(a, b) {
                return (a instanceof Set) && (b instanceof Set);
            }

            function setEqual(a, b) {
                return areSets(a, b) ? a.symmetricDifference(b).size == 0 : false;
            }

            function arrayEqual(a, b) {
                if (areArrays(a, b) && (a.length == b.length)) {
                    return a.every((e, i) => e == b[i]);
                }
                return false;
            }

            return {
                get to() { return this; },
                get be() { return this; },
                get not() { n = !n; prepend += "not "; return this; },
                get apowojize() { apowogise = !apowogise; return this; },
                equal(b) { tfn(`${a} == ${b}`, () => a == b); return this; },
                equalToArray(b) { tfn(`array, ${a} == ${b}`, () => arrayEqual(a, b)) },
                equalToSet(b) { tfn(`set, ${a} == ${b}`, () => setEqual(a, b)) },
                notEqual(b) { tfn(`${a} != ${b}`, () => a != b); return this; },
                greaterThan(b) { tfn(`${a} > ${b}`, () => a > b); return this; },
                lessThan(b) { tfn(`${a} < ${b}`, () => a < b); return this; },
                greaterThanOrEqual(b) { tfn(`${a} >= ${b}`, () => a >= b); return this; },
                lessThanOrEqual(b) { tfn(`${a} <= ${b}`, () => a <= b); return this; },
                toThrowError(b) { tfn(`${e.message} == ${b}`, () => e && e.message == b); return this; },
            };
        }
    };
}

function summarise(ctx) {
    console.log("\x1b[0m", `\ntesting - ${ctx.name}`);
    ctx.tests.forEach(t => console.log((t.result ? "\x1b[32m" : "\x1b[31m"), `  ${t.test}, ${t.result ? "pass" : "fail"}`));
    const passed = ctx.tests.filter(t => t.result).length;
    const failed = ctx.tests.filter(t => !t.result).length;
    console.log("\x1b[0m", `total tests: ${ctx.tests.length}, passed: ${passed}, failed: ${failed}`);
}

function test(name, fn = noop, ctx = { name: name, tests: [] }, asserts = Asserts(ctx)) {
    fn(asserts);
    summarise(ctx);
}

const it = test;

const pweeze = (name, fn = noop, ctx = { name: name, tests: [], pweeze: true }, asserts = Asserts(ctx)) =>
    test(name, fn, ctx, asserts);

const da = (name, fn = noop, ctx = { name: name, tests: [], da: true }, asserts = Asserts(ctx)) => {
    fn(asserts);
    summarise(ctx);
    console.log("\x1b[31m", "putin and twump approoves this twest. da!");
}

export { test, it, pweeze, da };
