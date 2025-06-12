import { it } from "../lib/index.js";

it("is another test...", (a) => {
    let pweeze = false;

    a.expect(pweeze).to.not.be.equal(true, "pweeze is false");
});
