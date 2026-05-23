import { Router } from "express";

import { usersRouter } from "./users-routes";
import { sessionRoutes } from "./sessions-routes";

const routes = Router()

routes.use("/users", usersRouter)
routes.use("/sessions", sessionRoutes)

export {routes}