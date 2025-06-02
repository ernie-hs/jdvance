import { expect } from "./index.js";

expect(1).to.be.equal(1);
expect(1).to.not.be.equal(2);
expect(1).to.not.not.be.equal(1);
expect(1).to.not.not.not.be.equal(2);
expect(2).to.greaterThan(1);
expect(1).to.not.greaterThan(3);
expect(1).lessThan(2);
expect(1).to.lessThanOrEqual(1);
expect(1).to.greaterThanOrEqual(1);
