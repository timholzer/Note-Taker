const path = require("path");

app.get("/notes", function(req, res) {
    res.sendFile(path.join(__dirname, "notes.html"));
});
  
app.get("*", function(req, res) {
    res.sendFile(path.join(__dirname, "add.html"));
});

app.get("/styles", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/css/styles.css"));
});
  