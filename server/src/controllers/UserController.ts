import { Request, Response } from "express";
import bcrypt from "bcrypt";
import { User, UserRole } from "../entities/User";

// Creation of the function getUsers that get all the users.
export async function getUsers(req: Request, res: Response) {
res.send(await User.find());
}

// Creation of the function createUser that create an user.
export function isUserRole(role: any): role is UserRole {
    if (!role) return false; 
    return Object.values(UserRole).includes(role); 
}

export async function createUser(req: Request, res: Response) {
if (typeof req.body.first_name !== 'string') {
    res.status(400).send('Missing "first_name" field');
    return;
}
if (typeof req.body.last_name !== 'string') {
    res.status(400).send('Missing "last_name" field');
    return;
}
if (typeof req.body.email !== 'string') {
    res.status(400).send('Missing "email" field');
    return;
}
if (typeof req.body.password !== 'string') {
    res.status(400).send('Missing "password" field');
    return;
}

const { first_name, last_name, email, password, role } = req.body;

const user = new User();

user.first_name = first_name;
user.last_name = last_name;
user.email = email;
user.password = await bcrypt.hash(password, 12);
if (!isUserRole(role)) {
    res.status(400).send('Invalid "role" field');
    return;
}
user.role = role;

await user.save();

res.sendStatus(201);
}

// Creation of the function getUser that get an user.
export async function getUser(req: Request, res: Response) {
const user = await User.findOne({
    where: { id: Number(req.params.id) }
});

if (!user) {
    res.sendStatus(404);
    return;
}

res.send(user);
}

// Creation of the function updateUser that update the details of an user.
export async function updateUser(req: Request, res: Response) {
if (typeof req.body.first_name !== 'string') {
res.status(400).send('Missing "first_name" field');
return;
}
if (typeof req.body.last_name !== 'string') {
res.status(400).send('Missing "last_name" field');
return;
}
if (typeof req.body.email !== 'string') {
res.status(400).send('Missing "email" field');
return;
}
if (typeof req.body.password !== 'string') {
res.status(400).send('Missing "password" field');
return;
}

const user = await User.findOne({
where: { id: Number(req.params.id) }
});

if (!user) {
res.sendStatus(404);
return;
}

user.first_name = req.body.first_name;
user.last_name = req.body.last_name;
user.email = req.body.email;
user.password = await bcrypt.hash(req.body.password, 12);
if (!isUserRole(req.body.role)) {
    res.status(400).send('Invalid "role" field');
    return;
}
user.role = req.body.role;

await user.save();

res.sendStatus(200);
}

// Creation of the function deleteUser that delete an user.
export async function deleteUser(req: Request, res: Response) {
const user = await User.findOne({
    where: { id: Number(req.params.id) }
});

if (!user) {
    res.sendStatus(404);
    return;
}

await user.remove();

res.sendStatus(200);
}










