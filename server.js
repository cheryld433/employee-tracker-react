const express = require("express");
const app = express();
const path = require("path");
const PORT = process.env.PORT || 8080;

app.use(express.static("build"));
app.get("*", function(req, res) {
    res.sendFile(path.resolve(_dirname, "build/index.html"));
});
app.listen(PORT, function() {
    console.log("App list4ening on PORT:", PORT);
});