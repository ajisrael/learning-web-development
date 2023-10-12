const fs = require("fs");

// fs.writeFile("messages.txt", "Hello from NodeJS!", (err) => {
//   if (err) throw err;
//   console.log("The file has been saved!");
// })

fs.readFile("messages.txt", 'utf8' ,(err, data) => {
  if (err) throw err;
  console.log(data);
})