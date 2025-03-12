import { Router } from "express";
import { createUser, deleteUser, getUser, getUsers, updateUser } from "../controllers/UserController";

const router = Router();

router.get('/', getUsers);
router.post('/', createUser);
router.get('/:id', getUser);
router.patch('/:id', updateUser);
router.delete('/:id', deleteUser);

export default router;