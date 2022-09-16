var http = require("http");
var hostname = "127.0.0.1";
var port = 8080;

const server = http.createServer(function (req, res) {
  const url = req.url;
  const method = req.method;
  if (path === "/products") {
    if (method === "GET") {
      res.writeHead(200, { "Content-Type": "apllication/json" });

      const products = JSON.stringify([
        {
          name: "농구공",
          price: 5000,
        },
      ]);
      res.end(products);
    } else if (method === "POST") {
    }
  }
  res.end("Good bye");
});

server.listen(port, hostname);

console.log("grab market sever on!");
