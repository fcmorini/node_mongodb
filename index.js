// const { Person } = require("./Person");
const dotenv = require("dotenv");

const connectToDatabase = require("./src/database/connect");

dotenv.config();

connectToDatabase();

// const person = new Person("Fernando");

// console.log(person.sayMyName());

// require("./modules/path");

// require("./modules/fs.js");

// require("./modules/http.js");

require("./modules/express");
