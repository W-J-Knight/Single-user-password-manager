const express = require("express");
const app = express();


// away to interact with mysql
const mysql = require("mysql");
// away for cleint's url to talk server's urls
const cors = require("cors");
// make sure the server running a different port then the default react port
// by set and port vari
const PORT = 3001;


// an output to the terminal know the server is running
app.listen(PORT, () => {
    console.log("Test browser at http://localhost:3001/");
    console.log("The server is run on port " + PORT);
});
