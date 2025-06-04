#!/usr/bin/env node
import * as path from "path";
import * as fs from "fs";
import { glob } from "glob";

const files = [];
const args = process.argv.slice(2);
const config = JSON.parse(fs.readFileSync(".jdvance", "utf8"));

if (args.length > 0) {
    args.forEach(f => files.push(path.join(process.cwd(), f)));
} else if (config.pattern) {
    const ffs = await glob(config.pattern);
    ffs.forEach(f => files.push(path.join(process.cwd(), f)));
} else {
    console.log("pweeze give at least one argument, now apologize");
    process.exit();
}

files.forEach(f => import(f));
