// import our function encryption and decryption

const { encrypt, decrypt } = require("./src/helper/EncryptionHandler");
const express = require("express");
const app = express();
const passwordRouter = require("./src/routes/passwordRouter");

// away to interact with mysql
const mysql = require("mysql");
// away for cleint's url to talk server's urls
const cors = require("cors");
// make sure the server running a different port then the default react port
// by set and port vari
const PORT = 3001;
const newLocal = "http://localhost:3000";
app.use(cors({
    origin: newLocal
}));

app.use(express.json());

// app.post("/decryptpassword", (req, res) => {
//     res.send(decrypt(req.body));
// });

app.use("/passwords", passwordRouter);
// test in the  browser http://localhost:3001/
app.get("/", (req, res) => {
    res.send("Hello World!");
});

// an output to the terminal know the server is running
app.listen(PORT, () => {
    console.log("Test browser at http://localhost:3001/");
    console.log("The server is run on port " + PORT);
});
