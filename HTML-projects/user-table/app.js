const express = require('express');
const connectDB = require("./config/db");
const cors = require('cors');
const path = require('path')
require('dotenv').config();


const userRoutes = require("./routes/users");
const app = express();
const PORT = 3000;

app.use(express.json());
app.use(cors({
    origin: "http://localhost:3000"
}));

app.use('/js', express.static(path.join(__dirname, 'public/api.js')));
app.use('/css', express.static(path.join(__dirname, 'public/style.css')));
connectDB();

app.get("/", (req, res) =>{
    res.sendFile(path.join(__dirname,'public/index.html'));
});

app.use("/api/users",userRoutes);
app.use("/api/User",userRoutes);

app.listen(PORT, ()=> {
    console.log(`app is runnng ${PORT}`);
});