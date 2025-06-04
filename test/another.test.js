import { it, expect } from "../lib/index.js";

it("is another test...", () => {
    let pweeze = false;

    expect(pweeze).to.not.be.equal(true, "pweeze is false");
});
