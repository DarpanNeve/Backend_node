//sync or blocking
//line by line execution


//async or non blocking
//line by line execution not guaranteed
//for async function
const fs = require("fs");
let text = fs.readFile("./data", "utf-8", (err, data) => {
    console.log(data);
});
console.log("this is a message");
