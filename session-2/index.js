const fs = require("node:fs");
// // read file
// // blocking code
// const fileContent = fs.readFileSync("./hello.txt", "utf-8"); // block here until the file is read
// console.log(fileContent);
// // non-blocking code "asynchronous code" with callback function
// fs.readFile("./hello.txt", "utf-8", (err, data) => {
//   //
//   if (err) {
//     console.error(err);
//     return;
//   }
//   console.log(data);
// });
// // write file
// fs.writeFile(
//   "./users.json",
//   JSON.stringify([
//     { name: "Alice", age: 30 },
//     { name: "Bob", age: 25 },
//   ]),
//   "utf-8",
//   (error, data) => {
//     if (error) {
//       console.error(error);
//       return;
//     }
//     console.log("File written successfully");
//   },
// );
// // delete file
// fs.unlink("./users.json", (error) => {
//   if (error) {
//     console.error(error);
//     return;
//   }
//   console.log("File deleted successfully");
// });

// Streams
// const stream = fs.createReadStream("./hello.txt", {
//   highWaterMark: 10 * 1024 * 1024, // 1MB
// });
// const writeStream = fs.createWriteStream("./hello-copy.txt");
// stream.on("data", (chunk) => {
//   console.log("New chunk received");
//   writeStream.write(
//     "+++++++++++++++++++++++++++++++++++++chunk+++++++++++++++++++++++++++++++++++++\n",
//   );
//   writeStream.write(chunk);
// });

const _ = require("lodash");
console.log(_.chunk([1, 2, 3, 4, 5], 2));
