const express = require("express");
const app = express();


// away to interact with mysql
const mysql = require("mysql");
// away for cleint's url to talk server's urls
const cors = require("cors");
// make sure the server running a different port then the default react port
// by set and port vari
const PORT = 3011;

// make an connection to the database
const db = mysql.createConnection({
    // the own name of the database
    user: "root",
    // host on ame machine
    host: "localhost",
    // password is hidden to the database
    password: process.env["pw"],
    // name of database
    database: "PasswordManager",
});

app.post("/addpassword", (req, res) => {
    const { password, title } = req.body;
    // encrypt the password
    const passwordEncrpted = encrypt(password);

    //  run a database query add a password title to the database table
    db.query(
        "INSERT INTO  Passwords (password, title, iv) VALUES (?,?,?)",
        [passwordEncrpted.password, title, passwordEncrpted.iv],
        (err, result) => {
            if (err) {
                console.log(err);
            } else {
                res.send("Success!!!");
            }
        }
    );
});



// an output to the terminal know the server is running
app.listen(PORT, () => {
    console.log("Test browser at http://localhost:3001/");
    console.log("The server is run on port " + PORT);
});
