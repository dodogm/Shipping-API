import { Request, Response, NextFunction } from "express";
import { AppError } from "@/utils/app-error";
import { request } from "http";

function verifyUserAthorization(role: string[]) {
    return (request: Request, response: Response , next:NextFunction) => {
        if ((!request.user) || (!role.includes(request.user.role))) {
            throw new AppError("Unauthorized", 401)
        }

        return next()
    }
}

export {verifyUserAthorization}