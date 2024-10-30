import http from "node:http";
// Creating a server running
const server = http.createServer((req, res) => {
  console.log(req);

  res.end("Welcome");
});
// Starting a server on port 300
server.listen(3000, () => {
  console.log("Server started and waiting for request");
});
