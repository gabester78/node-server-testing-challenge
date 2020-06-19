const router = require("express").Router();
const names = require("./namesModel");

router.get("/", (req, res) => {
  names
    .find()
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((err) => res.send(err));
});

// router.post("/post", (req, res) => {
//   names
//     .add(req.body)
//     .then((data) => {
//       res.status(201).json(data);
//     })
//     .catch((error) => {
//       res.status(500).json({
//         error: "There was an error while saving the name to the database",
//       });
//     });
// });

// router.delete("/:id", (req, res) => {
//   names
//     .remove(req.params.id)
//     .then(() => {
//       res.status(200).json({ name: "deleted" });
//     })
//     .catch((error) => {
//       res.status(500).json({
//         error: "There was an error while deleting the name from the database",
//       });
//     });
// });

module.exports = router;
