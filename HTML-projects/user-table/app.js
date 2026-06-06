const express = require('express');
const connectDB = require("./config/db")
require('dotenv').config();

const userRoutes = require("./routes/users")
const app = express();
const PORT = 3000;

app.use(express.json());
connectDB();

app.get("/", (req, res) =>{
    res.send('welcome to the DB');
});

app.use("/api/users",userRoutes);
app.use("/api/User",userRoutes);

app.listen(PORT, ()=> {
    console.log(`app is runnng ${PORT}`);
});