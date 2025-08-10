import express from "express";

const app = express();

app.get("/signup", (eq,res) => {
    res.send("hello wolrd");
})