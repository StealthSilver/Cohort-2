import express from "express";

const app = express();

app.get("/signup", (req,res) => {
    res.send("hello wolrd");
})

app.get("/signup", (req,res) => {
    res.send("kje");
})

app.listen(5000);