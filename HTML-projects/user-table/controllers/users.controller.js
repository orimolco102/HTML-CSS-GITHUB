const { response } = require("express");
const user = require("../model/user");

async function getAllUsers(req, res) {
    try {
        const users = await user.find();
        res.status(200).json(users);
        console.log(users);
        
    } catch {
        res.status(500).json({message: "Internal server error", error: error.message})
    }
}

async function getUserByID(req, res) {
    try {
        const User = await user.findById(req.params.id);
        
        console.log(req.params.id);
        if (!User) {
            return res.status(404).json({message: "couldent find a user", error: error.message})
        }
        return res.status(200).json(User);
    } catch (error) {
        res.status(500).json({message: "Internal server error", error: error.message})
    }
}

async function getUserByName(req,res) {
    try {
        const UserName = await user.findOne({ name: req.params.name });

        if (!UserName) {
            return res.status(404).json({message: "couldent find a user name", error: error.message})
        }
        return res.status(200).json(UserName);
    } catch (error) {
        res.status(500).json({message: "Internal server error", error: error.message})
    }
}

async function createUser(req, res) {

    try {
        const newUser = await user.create(req.body);
        res.status(201).json(newUser);
    } catch (error) {
        res.status(400).json({message: "Internal server error", error: error.message})
    }
    
}

async function delUser(req, res) {
    try {
        const deleteUser = await user.findOneAndDelete(req.params.id);
        if (!deleteUser) {
            return response.status(404).json({message: "User not deleted"})
        }
        res.status(200).json({message: "User Deleted successfuly", user: delUser})
    } catch (error) {
        res.status(400).json({message: "Internal server error", error: error.message})
    }
}

module.exports = {
    getAllUsers,
    getUserByID,
    getUserByName,
    createUser,
    delUser
}