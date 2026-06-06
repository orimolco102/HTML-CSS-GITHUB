require('dotenv').config();
const mongoose = require('mongoose');
const user = require('./model/user.js');

const users = [
    {   name: "Liam Miller",
        email: "liam.miller@example.com", 
        age: 24 },

    {   name: "Sophia Chen", 
        email: "sophia.chen@techmail.org", 
        age: 31 },

    {   name: "Marcus Thorne", 
        email: "m.thorne@workspace.net", 
        age: 45 },

    {   name: "Elena Rodriguez", 
        email: "elena.rod@provider.com", 
        age: 28 },

    {   name: "Julian Voss", 
        email: "voss.julian@outlook.com", 
        age: 19 },

    {   name: "Amara Okoro", 
        email: "amara.okoro@globemail.com", 
        age: 37 },

    {   name: "Kaito Tanaka", 
        email: "k.tanaka@japanmail.jp", 
        age: 52 },

    {   name: "Sarah Jenkins", 
        email: "s.jenkins@academy.edu", 
        age: 22 },

    {   name: "Omar Al-Farsi", 
        email: "omar.farsi@desert-tech.com", 
        age: 33 },

    {   name: "Isabella Rossi", 
        email: "rossi.isa@italymail.it", 
        age: 29 }
];

async function insertUsers() {
    try {
        await mongoose.connect(`${process.env.MONGO_URL}/${process.env.DB_NAME}`)

        await user.deleteMany({})
        console.log("previus users deleted");

        await user.insertMany(users);
        console.log("users loaded in the DB seccsessfuly");
        
    } catch (error){
        console.log("Error loading", error.message);
    } finally {
        await mongoose.disconnect();
        console.log("closed connection!");
        
    }
}

insertUsers();