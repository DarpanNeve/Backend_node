//intro to modules
// fs refers to the file system

const fs = require("fs");
let text = fs.readFileSync("data", "utf-8");
text = text.replace("data", "darpan");
console.log(text);
fs.writeFileSync("new data.txt", text);