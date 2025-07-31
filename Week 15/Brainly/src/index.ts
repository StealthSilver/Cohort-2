import express from "express"
import mongoose from "mongoose"
import jwt from "jsonwebtoken"

const app = express();
const PORT = 3000;

app.post("/api/vi/signup" , (req,res) => {

})

app.post("/api/vi/signin" , (req,res) => {
    
})

app.get("/api/vi/content" , (req,res) => {
    
})


app.post("/api/vi/content" , (req,res) => {
    
})

app.delete("/api/vi/content" , (req,res) => {
    
})

app.post("/api/vi/brain/share" , (req,res) => {
    
})

app.get("/api/vi/brain/:shareLink" , (req,res) => {
    
})

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });