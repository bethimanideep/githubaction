const crypto = require('crypto');
let args = process.argv.slice(2);
let a = +args[1];
let b = +args[2];
let operation = args[0];
switch (operation) {
    case "add": console.log(a + b);
        break;
    case "sub": console.log(a - b);
        break;
    case "mult": console.log(a * b);
        break;
    case "divide": console.log(a / b);
        break;
    case "sin": console.log(Math.sin(a));
        break;
    case "cos": console.log(Math.cos(a));
        break;
    case "tan": console.log(Math.tan(a));
        break;
    case "random":
        if (a) {
            crypto.randomBytes(a, (err, buf) => {
                if (err) throw err;
                console.log(buf.toString("binary"));
            });
        }
        else console.log("Provide length for random number generation.")
        break;
    default:
        console.log("Invalid operation");
}
