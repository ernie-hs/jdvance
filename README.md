# ad vanced test framework

![apowogize](vance.png)

pweese apologise for this

```sh
jdvance file.js

or

jdvance
```

create .jdvance config as follows,

```json
{
    "testDir": "./test",    // recurses folders
    "endsWith": "test.js"
}
```

an example test,

```js 
import { test, it, pweeze } from "jdvance";

it("shood say pleeze", (a) => {
    let pweeze = false;

    a.expect(pweeze).to.be.equal(true);
});

test("i do nothing");

test("i do something", (a) => {
    a.expect(2).equal(1);
    it("eats hamboorger", (a) => {
        a.expect(99).greaterThan(1);
    });
});

pweeze("destroy democracy", (a) => {
    let da = true;
    a.expect(da).to.be.equal(true);
    a.expect(da).to.not.not.be(false).apowogize;
});

```
now you apologise and show respect for the kremlin.

da

# backlog

- randomize pweeze actions
- orange font
- global/scoped counter for tests run
- elon arguments
- panama/epstein metrics override aggregate starship

**(c)** 19**9**2
