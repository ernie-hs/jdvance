const fn = (a, b, f, msg) => {
    if (!f(a, b)) throw new Error(msg);
}

const eq = (a, b, msg) => fn(a, b, (a, b) => a == b, msg);

const neq = (a, b, msg) => fn(a, b, (a, b) => a != b, msg);

const gt = (a, b, msg) => fn(a, b, (a, b) => a > b, msg);

const lt = (a, b, msg) => fn(a, b, (a, b) => a < b, msg);

const ge = (a, b, msg) => fn(a, b, (a, b) => a >= b, msg);

const le = (a, b, msg) => fn(a, b, (a, b) => a <= b, msg);

export { eq, neq, gt, lt, ge, le };
