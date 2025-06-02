#!/usr/bin/env node
import * as fs from "fs";
import * as path from "path";

var args = process.argv.slice(2);

if (args.length !== 1) {
    console.log("Warning: Requires 1 argument");
    console.log("vance [targetfile]");
    process.exit();
}

const src = args[0];
const dirsrc = path.dirname(src);

if (!fs.existsSync(src)) {
    console.log("Error: Source file doesn't exist. Given: ", src);
    process.exit();
}

import(src);