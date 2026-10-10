const http = require("node:http");
const fs = require("node:fs");
const homePage = fs.readFileSync("./views/index.html", "utf-8");
const aboutPage = fs.readFileSync("./views/about.html", "utf-8");
const homeStyle = fs.readFileSync("./views/index.css", "utf-8");
const sever = http.createServer((req, res) => {
  if (req.url === "/") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(homePage);
  } else if (req.url === "/about") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(aboutPage);
  } else if (req.url === "/index.css") {
    res.writeHead(200, { "Content-Type": "text/css" });
    res.end(homeStyle);
  } else {
    res.statusCode = 404;
    res.writeHead({ "Content-Type": "text/html" });
    res.end("<h1>404 - Page Not Found</h1>");
  }
});

sever.listen(5000, "localhost", () => {
  console.log("Server running at http://localhost:5000/");
});
