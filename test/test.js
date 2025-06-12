import { test, it } from "../lib/index.js";

it("is empty");

test("expect...", (a) => {
    a.expect(1).to.be.equal(1);
    a.expect(1).to.not.be.equal(2);
    a.expect(1).notEqual(2);
    a.expect(1).to.not.not.be.equal(1);
    a.expect(1).to.not.not.not.be.equal(2);
    a.expect(2).to.greaterThan(1);
    a.expect(1).to.not.greaterThan(3);
    a.expect(1).lessThan(2);
    a.expect(1).to.lessThanOrEqual(1);
    a.expect(1).to.greaterThanOrEqual(1);
    a.expect(1).to.be.greaterThan(2);
    it("haz hamburger", function (a) {
        let pweeze = false;

        a.expect(pweeze).to.not.be.equal(true, "pweeze is false");
    });
});
