const mysql = require("mysql");
// import our function encryption and decryption
const { encrypt, decrypt } = require("../helper/EncryptionHandler");
const express = require("express");
let passwordRouter = express.Router();


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

passwordRouter
    .route("/")
    //line 67-75 /showpassword
    .get((req, res) => {
        db.query("SELECT * FROM Passwords", (err, result) => {
            if (err) {
                console.log(err);
            } else {
                res.send(result);
                // res.send("Hello");
            }
        });
    })
    // 37-54 addpassword
    .post((req, res) => {
        //destructure the body sent
        const { password, title } = req.body;
        const passwordEncrpted = encrypt(password);
        db.query(
            "INSERT INTO  Passwords (password, title, iv) VALUES (?,?,?)",
            [passwordEncrpted.password, title, passwordEncrpted.iv],
            (err, result) => {
                if (err) {
                    console.log("db.query" + err);
                } else {
                    res.send("Success!!!  db.query ");
                }
            }
        );
    });

passwordRouter
    .route("/:id")
    //82-93 updatepassword
    .put((req, res) => {
        //const id = req.body.id;
        //const password = req.body.password;
        // const { password, id } = req.body;
        const updateId = req.params.id;
        const { password } = req.body;
        const passwordEncrpted = encrypt(password);
        db.query(
            "UPDATE Passwords SET password = ?, iv = ? WHERE id = ?",
            [passwordEncrpted.password, passwordEncrpted.iv, updateId],
            (err, result) => {
                if (err) {
                    console.log(err);
                } else {
                    res.send(result);
                }
            }
        );
    })
    //56-65/deletepassword
    .delete((req, res) => {
        const delid = req.params.id;
        db.query("DELETE FROM Passwords WHERE id=?", delid, (err, result) => {
            if (err) {
                console.log(err);
            } else {
                res.send(result);
            }
        });
    });

passwordRouter
    .route("/decrypt")
    //"/decryptpassword"
    .post((req, res) => {
        res.send(decrypt(req.body));
    });

module.exports = passwordRouter;
