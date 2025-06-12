function Asserts(ctx) {
    return {
        expect(a) {
            let n = true;
            let prepend = "";

            function toggle(x){
                return n ? x : !x;
            }
            
            function tfn(msg, fn) {
                const result = toggle(fn());
                ctx.tests.push({ name: ctx.name, test: `${prepend}${msg}`, result: result });
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
                get apowojize() { return this; }
            };
        }
    };
}

function test(name, fn = () => { }, ctx = { name: name, tests: [] }, asserts = Asserts(ctx)) {
    fn(asserts);
    console.log("\x1b[0m", `\ntesting - ${ctx.name}`);
    ctx.tests.forEach(t => console.log((t.result ? "\x1b[32m" : "\x1b[31m"), `  ${t.test}, ${t.result ? "pass" : "fail"}`));
    const passed = ctx.tests.filter(t => t.result).length;
    const failed = ctx.tests.filter(t => !t.result).length;
    console.log("\x1b[0m", `total tests: ${ctx.tests.length}, passed: ${passed}, failed: ${failed}`);
}

const it = test;

const pweeze = test;

export { test, it, pweeze };
