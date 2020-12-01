const noteDB = require("../db/db.json")
const fs = require("fs");

let savedNotes = fs.readFileSync("./db/db.json", "UTF-8");
if (savedNotes) {
    var oldNotes = JSON.parse(savedNotes);
    notes = oldNotes;
} else {
    notes = [];
}

module.exports = function (app){

app.get("/api/notes", function(req, res) {
    res.json(notes);
  });

app.post("/api/notes", function(req, res) {
    
let newNote = req.body;
notes.push(newNote);
res.json(newNote);
for (i = 0; i < notes.length; i ++) {
  notes[i].id = i;
}  
  fs.writeFileSync("./db/db.json", JSON.stringify((notes,'\t')), function (err) {
    if (err) 
        throw err
}); 
});

app.delete("/api/notes/:id", function (req, res) {
  notes.splice(req.params.id, 1);
  for (i = 0; i < notes.length; i ++) {
    notes[i].id = i;
}
  fs.writeFileSync("./db/db.json", JSON.stringify((notes,'\t')), function (err) {
      if (err) 
          throw err
      });
  res.json({deletion:"success"})
});
}