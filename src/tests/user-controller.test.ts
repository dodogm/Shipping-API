import request from "supertest"

import { app } from "@/app"
import { prisma } from "@/database/prisma"


describe("UserController", () => {
    let user_id: string

    afterAll(async () => {
        await prisma.user.delete({where: {id: user_id}})
    })
    it("shold create a new uer succesfully", async () => {
        const response = await request(app).post("/users").send({
            name: "Auth Test User",
            email: "auth.test@example.com",
            password: "password123",
        })

        expect(response.status).toBe(201)
        expect(response.body).toHaveProperty("id")
        expect(response.body.name).toBe("Auth Test User")

        user_id = response.body.id

    })

    it("shold throw an error if user with same email already exists", async () => {
        const response = await request(app).post("/users").send({
            name: "Duplicate User",
            email: "auth.test@example.com",
            password: "password123",
        })

        expect(response.status).toBe(400)
        expect(response.body.message).toBe("User with same email already exists")
})

 it("shold throw a validation email is invalid", async () => {
        const response = await request(app).post("/users").send({
            name: "Test User",
            email: "invalid-email",
            password: "password123",
        })

        expect(response.status).toBe(400)
        expect(response.body.message).toBe("validation error")
})
})