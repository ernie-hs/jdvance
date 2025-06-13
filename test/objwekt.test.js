import { it, test } from "../lib/index.js";

test("twest swets, maapz and wists", (a) => {

    it("musk werk 4 awwayz", (a) => {
        a.expect([1, 2, 3]).to.be.equalToArray([1, 2, 3]);
        a.expect(2).to.equalToArray(2);
        a.expect([]).equalToArray([]);
        a.expect([1, 2]).to.equalToArray([2, 1]);
        a.expect([1, 2]).to.equalToArray([1, 2, 4]);
        a.expect([1, 2, 3]).to.be.equalToArray([1, 2]);
    });

    it("musk werk 4 swets", (a) => {
        a.expect(new Set([1, 2, 3])).to.be.equalToSet(new Set([1, 2, 3]));
        a.expect(2).to.equalToSet(2);
        a.expect(new Set()).equalToSet(new Set());
        a.expect(new Set([1, 2])).to.equalToSet(new Set([2, 1]));
        a.expect(new Set([1, 2])).to.equalToSet(new Set([1, 2, 4]));
        a.expect(new Set([1, 2, 3])).to.be.equalToSet(new Set([1, 2]));
    });
});
