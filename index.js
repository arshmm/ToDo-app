var express = require("express"),
  app = express(),
  todoRoutes = require("./routes/todos");
bodyParser = require("body-parser");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + "/public"));
app.use(express.static(__dirname + "/views"));

app.get("/", function (req, res) {
  res.sendFile("index.html");
});

app.use("/api/todos", todoRoutes);
const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log("Server started"));
