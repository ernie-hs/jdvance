#!/usr/bin/env node
import * as path from "path";
import * as fs from "fs";

function finder(startPath, endsWith) {
    const found = [];
    const files = fs.readdirSync(startPath);
    for (const f of files) {
        const file = path.join(startPath, f);
        const stat = fs.lstatSync(file);
        if (stat.isDirectory()) finder(file, endsWith);
        else if (file.endsWith(endsWith)) found.push(file);
    }
    return found;
}

const files = [];
const args = process.argv.slice(2);
const config = JSON.parse(fs.readFileSync(".jdvance", "utf8"));

if (args.length > 0) {
    args.forEach(f => files.push(path.join(process.cwd(), f)));
} else if (config.testDir && config.endsWith) {
    const ffs = finder(config.testDir, config.endsWith);
    ffs.forEach(f => files.push(path.join(process.cwd(), f)));
} else {
    console.log("pweeze give at least one argument or, a corrcet confwig file.  Now apologize");
    process.exit();
}

console.log("\x1b[33m", "initialising JDVance", "\x1b[0m");
files.forEach(f => import(f));
