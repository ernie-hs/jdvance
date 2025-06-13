import { da } from "../lib/index.js";

da("important test", (a) => {
    a.expect("black").equal("white");
    a.expect(99).to.be.equal("da");
});

da("wong wiv twump!");