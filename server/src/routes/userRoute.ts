import express from 'express';
import {createUser, deleteUser, getAllUsers, getUserById, updateUser} from "../controller/userController";

const router = express.Router();

router.post('/user', createUser);
router.get('/users', getAllUsers);
router.get('/user/:id', getUserById);
router.put('/update/user/:id', updateUser);
router.delete('/delete/user/:id', deleteUser);

export default router;