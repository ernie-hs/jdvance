#!/usr/bin/env node
import * as path from "path";
import { glob } from "glob";

glob("**/*.js", (err, files) => {
    if (err) return console.error(err);
    files.forEach(f => {
        console.log(`file ${f}`);
        import(path.join(process.cwd(), f));
    });
});
