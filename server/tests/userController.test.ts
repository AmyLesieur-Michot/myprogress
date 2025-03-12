import supertest from "supertest";
import app from "../src/app";
import { initAndClearDatabase } from "./utils";
import { User, UserRole } from "../src/entities/User";
import bcrypt from "bcrypt";


beforeEach(async () => {
    await initAndClearDatabase();
});

describe("GET /users", () => {
    it("should returns the list of users", async () => {
        await User.insert({
            first_name: "Teacher",
            last_name: "Admin",
            email: "test@gmail.com",
            password: await bcrypt.hash("poule", 12),
            role: UserRole.TEACHER,
        });
        await User.insert({
            first_name: "Student",
            last_name: "Etudiant",
            email: "test@gmail.com",
            password: await bcrypt.hash("dinde", 12),
            role: UserRole.STUDENT,
        });

        const response = await supertest(app).get("/users");

        expect(response.status).toBe(200);
        expect(typeof response.body).toBe("array");
        expect(response.body).toContainEqual({
            first_name: "Teacher",
            last_name: "Admin",
            email: "test1@gmail.com",
            role: UserRole.TEACHER,
        });
        expect(response.body).toContainEqual({
            first_name: "Student",
            last_name: "Etudiant",
            email: "test2@gmail.com",
            role: UserRole.STUDENT,
        });
        expect(response.body.length).toBe(2);    
    });
});

describe("POST /user", () => {
    it("should create an user", async () => {
        const response = await supertest(app).post("/user").send({
            first_name: "Paul",
            last_name: "Jean",
            email: "paul@gmail.com",
            password: "louis",
            role: UserRole.STUDENT,
        });

        expect(response.status).toBe(201);
        expect(response.text).toBe("Created");

        const users = await User.find();
        expect(users.length).toBe(1);
        expect(users[0].first_name).toBe("Paul");
        expect(await bcrypt.compare("louis", users[0].password)).toBe(true);
    })
})

