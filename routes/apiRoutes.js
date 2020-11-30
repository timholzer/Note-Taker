const noteDB = require("../db/db.json")

module.exports = function (app){

app.get("/api/notes", function(req, res) {
    res.json(noteDB);
  });

app.post("/api/notes", function(req, res) {

let newNote = req.body;

newNote.routeName = newCharacter.name.replace(/\s+/g, "").toLowerCase();

console.log(newNote);
notes.push(newNote);
res.json(newNote);
  });

app.delete("/api/notes/:id", function(req, res) {
});

}