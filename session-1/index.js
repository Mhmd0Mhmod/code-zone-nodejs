// const os = require("node:os");
// const fs = require("node:fs");

// console.log(os.arch()); // x64
// console.log(os.platform()); // linux

// fs.readFile("hello.txt", "utf8", (err, data) => {
//   if (err) {
//     console.error(err);
//     return;
//   }
//   console.log(data);
// });
// const logger = require("./logger");
// logger("this is messager form index.js");

import { log } from "./logger.js";
log("this is messager form index.js");
