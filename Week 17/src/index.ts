
import express from "express";
import { Client } from "pg";

const app = express();
app.use(express.json());

const pgClient = new Client("postgresql://neondb_owner:wrWG5KI1ziYB@ep-lucky-snow-a50il0b5.us-east-2.aws.neon.tech/neondb?sslmode=require")

pgClient.connect();


app.post("/signup", async (req: { body: { username: any; password: any; email: any; }; }, res: { json: (arg0: { message: string; }) => void; }) => {
    const username = req.body.username;
    const password = req.body.password;
    const email = req.body.email;

    try {

        const insertQuery = `INSERT INTO users (username, email, password) VALUES ($1, $2, $3);`

        const response = await pgClient.query(insertQuery, [username, email, password]);

        res.json({
            message: "You have signed up"
        })
    } catch(e) {
        console.log(e);
        res.json({
            message: "Error while signing up"
        })
    }

})

app.listen(3000)