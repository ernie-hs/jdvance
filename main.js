#!/usr/bin/env node
import * as fs from "fs";

var args = process.argv.slice(2);

if (args.length !== 1) {
    console.log("requires 1 argument");
    console.log("jdvance [file]");
    process.exit();
}

const src = args[0];

if (!fs.existsSync(src)) {
    console.log("file doesn't exist: ", src);
    process.exit();
}

import(src);
