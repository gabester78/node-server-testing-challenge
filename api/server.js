const express = require("express");
const server = express();
server.use(express.json());
const namesRouter = require("../router/namesRouter.js");
const names = require("../router/namesModel");
server.use("/api/names", namesRouter);
server.get("/", (req, res) => {
  res.status(200).json({ api: "up" });
});

server.post("/post", (req, res) => {
  names
    .add(req.body)
    .then((data) => {
      res.status(201).json(data);
    })
    .catch((error) => {
      res.status(500).json({
        error: "There was an error while saving the name to the database",
      });
    });
});

server.delete("/:id", (req, res) => {
  names
    .remove(req.params.id)
    .then(() => {
      res.status(200).json({ name: "deleted" });
    })
    .catch((error) => {
      res.status(500).json({
        error: "There was an error while deleting the name from the database",
      });
    });
});

module.exports = server;
