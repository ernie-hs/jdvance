import { test } from "../lib/index.js";

function frow() {
    throw new Error("apowogize!");
}

test("important inzwepton test", (a) => {
    a.expect(frow()).toThrowError("apowogize!");
});
