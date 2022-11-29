import express from "express";
import Connection from "./Database/db.js";
import dotenv from "dotenv"

const app = express();

dotenv.config();

const PORT = 8081;

const username = process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD;

Connection(username, password);

app.listen(PORT, ()=> console.log(`Sever is running successfully on PORT http://localhost:${PORT}/ `))