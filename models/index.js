require("dotenv").config();
var mongoose = require("mongoose");
mongoose.set("debug", true);
mongoose
  .connect(process.env.DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("DB connected"));

mongoose.Promise = Promise;

module.exports.Todo = require("./todo");
