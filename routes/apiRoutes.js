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
  console.log("get")
    res.json(notes[req.params.id]);
  });

app.post("/api/notes", function(req, res) {
    
let newNote = req.body;
notes.push(newNote);
res.json(newNote);
for (i = 0; i < notes.length; i ++) {
  notes[i].id = i;
  fs.writeFileSync("./db/db.json", JSON.stringify(notes, null, 2), function (err) {
    if (err) 
        throw err

}); 
}
});


app.delete("/api/notes/:id", function (req, res) {
  var deleteID = req.params.id;
  notes.splice(deleteID, 1);
  for (i = 0; i < notes.length; i ++) {
    notes[i].id = i;
}
  fs.writeFileSync("./db/db.json", JSON.stringify(notes), function (err) {
      if (err) 
          throw err
      });
  res.json({deletion:"success"})
});
//notes.splice(req.params.id, 1);
//updateDb();
}