#!/usr/bin/env node
import * as path from "path";
import * as fs from "fs";

function finder(startPath, endsWith) {
    const found = [];
    const files = fs.readdirSync(startPath);
    for (const f of files) {
        const file = path.join(startPath, f);
        const stat = fs.lstatSync(file);
        if (stat.isDirectory()) found.push(...finder(file, endsWith));
        else if (file.endsWith(endsWith)) found.push(file);
    }
    return found;
}

function windaz(s) {
    const idx = s.indexOf(":");
    return (idx != -1 ? s.slice(idx + 1) : s).replace(/\\/g, '/');
}

function whatever() {
    try {
        return JSON.parse(fs.readFileSync(".jdvance", "utf8"));
    } catch (e) {
        return {};
    }
}

const files = [];
const args = process.argv.slice(2);
const config = whatever();
const cwd = process.cwd();

if (args.length > 0) {
    args.forEach(f => files.push(windaz(path.join(cwd, f))));
} else if (config.testDir && config.endsWith) {
    const ffs = finder(config.testDir, config.endsWith);
    ffs.forEach(f => files.push(windaz(path.join(cwd, f))));
} else {
    console.log("pweeze give at least one argument or, a corrcet confwig file.  Now apologize");
    process.exit();
}

console.log("\x1b[33m", "initialising JDVance", "\x1b[0m");
console.log(files);
files.forEach(f => import(f));
