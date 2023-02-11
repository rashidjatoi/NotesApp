const express = require("express");
const router = express.Router();

const Note = require("./../models/note");

// // Notes Route ("/notes/list")
// router.get("/list", async function (req, res) {
//   // Retrieve all the available fields/documents in model
//   var notes = await Note.find({ userid: req.body.userid });
//   res.json(notes);
//   // res.send("This is the Notes Page");
// });

// Get all the data from the api
router.get("/list", async function (req, res) {
  try {
    // Retrieve all the available fields/documents in the model
    var notes = await Note.find({});
    res.json(notes);
  } catch (error) {
    res.status(500).send(error);
  }
});


// Notes Route ("/notes/add")
router.post("/add", async function (req, res) {
  await Note.deleteOne({ id: req.body.id });

  // created new note
  var newNote = new Note({
    id: req.body.id,
    userid: req.body.userid,
    title: req.body.title,
    content: req.body.content,
  });

  await newNote.save();

  const response = { message: "New Note Created!  " + "id: " + req.body.id };
  res.json(response);
});

// Delete Notes
router.post("/delete", async function (req, res) {
  await Note.deleteOne({ id: req.body.id });
  const response = { message: "Note Deleted!  " + "id: " + req.body.id };
  res.json(response);
});

module.exports = router;
