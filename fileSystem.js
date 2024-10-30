import { log } from "node:console";
import fs from "node:fs";

console.log("One");

fs.writeFileSync("chima.js", `const name = "Chima"`, "utf8");
let chimaContent = fs.writeFileSync("chima.txt", "Hello Chima", "utf8");
// console.log(chimaContent);

// Reading file asynchronously

fs.readFile("chima.txt", "utf8", (err, data) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log(data);
  console.log("Two");
});

fs.writeFile("messi.js", "let GOAT='Messi'", (err) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log("File created successfully");
});

console.log("Three");
