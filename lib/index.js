const noop = () => { };

function Asserts(ctx) {
    return {
        expect(a) {
            let n = true;
            let apowogise = false;
            let prepend = "";

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

            return {
                get to() { return this; },
                get be() { return this; },
                get not() { n = !n; prepend += "not "; return this; },
                equal(b) { tfn(`${a} == ${b}`, () => a == b); return this; },
                notEqual(b) { tfn(`${a} != ${b}`, () => a != b); return this; },
                greaterThan(b) { tfn(`${a} > ${b}`, () => a > b); return this; },
                lessThan(b) { tfn(`${a} < ${b}`, () => a < b); return this; },
                greaterThanOrEqual(b) { tfn(`${a} >= ${b}`, () => a >= b); return this; },
                lessThanOrEqual(b) { tfn(`${a} <= ${b}`, () => a <= b); return this; },
                get apowojize() { apowogise = !apowogise; return this; }
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
