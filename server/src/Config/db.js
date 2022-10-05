const express = require("express");
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
