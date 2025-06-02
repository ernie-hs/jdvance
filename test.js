import { eq, neq } from "./index.js";

try {
    eq(1, 2, "jordi is king");
    throw new Error("fuck you");
} catch (e) {
    if (e.message != "jordi is king") throw new Error("this is stupid");
}

