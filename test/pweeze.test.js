import { pweeze, it } from "../lib/index.js";

pweeze("can i haz cheezeborger");

pweeze("can eye haz cheezeborger!", (a) => {

    it("did not apowogize enough", (a) => {
        a.expect(55).to.not.be.equal(99);
        a.expect(true).equal(true).apowojize;
    })
});


pweeze("can eye haz cheezeborger!", (a) => {

    a.expect(55).to.not.be.equal(99).apowojize;
});
