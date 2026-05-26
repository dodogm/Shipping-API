import request from "supertest"
import { prisma } from "@/database/prisma"
import { app } from "@/app"

describe("SessionsController", () => {
    let user_id: string

    afterAll(async () => {
            await prisma.user.delete({where: {id: user_id}})
        })

    it("shold authenticate a and get access token", async () => {
        const user_response = await request(app).post("/users").send({
                    name: "Test User",
                    email: "test@example.com",
                    password: "password123",
                })

                user_id = user_response.body.id

                const session_response = await request(app).post("/sessions").send({
                    email: "test@example.com",
                    password: "password123",
                })

                expect(session_response.status).toBe(200)
                expect(session_response.body.token).toEqual(expect.any(String))
    })
})