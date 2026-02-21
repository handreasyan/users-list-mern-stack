import User from "../model/userModel";
import {Request, Response} from "express";

export const createUser = async (req: Request, res: Response) => {
    try {
        const newUser = new User(req.body);
        const {email} = newUser

        const userExist = await User.findOne({email})

        if (userExist) {
            return res.status(400).json({message: 'User already exists'})
        }

        const savedData = await newUser.save();
        res.status(200).json(savedData);

    } catch (error: any) {
        res.status(500).json({errorMessage: error?.message || error || 'Something went wrong'});
    }
}

export const getAllUsers = async (req: Request, res: Response) => {
    try {
        const usersData = await User.find()
        if (!usersData || usersData.length === 0) {
            return res.status(404).json({message: 'GET ALL: No users found'})
        }

        res.status(200).json(usersData)


    } catch (error: any) {
        res.status(500).json({errorMessage: error?.message || error || 'Something went wrong'});
    }
}

export const getUserById = async (req: Request, res: Response) => {
    try {
        const id = req.params.id;
        const user = await User.findById(id)
        if (!user) {
            return res.status(404).json({message: 'GET BY ID: User not found'})
        }

        res.status(200).json(user)
    } catch (error: any) {
        res.status(500).json({errorMessage: error?.message || error || 'GET: Something went wrong'});
    }
}

export const updateUser = async (req: Request, res: Response) => {
    try {
        const id = req.params.id;
        const user = await User.findById(id)
        if (!user) {
            return res.status(404).json({message: 'PUT: User not found'})
        }

        const updatedUser = await User.findByIdAndUpdate(id, req.body, {returnDocument: 'after'})
        res.status(200).json(updatedUser)
    } catch (error: any) {
        res.status(500).json({errorMessage: error?.message || error || 'PUT: Something went wrong'});
    }
}

export const deleteUser = async (req: Request, res: Response) => {
    try {
        const id = req.params.id;
        const user = await User.findById(id)
        if (!user) {
            return res.status(404).json({message: 'DELETE: User not found'})
        }

        await User.findByIdAndDelete(id)
        res.status(200).json(`User: ${user.name} deleted`)
    } catch (error: any) {
        res.status(500).json({errorMessage: error?.message || error || 'DELETE: Something went wrong'});
    }
}