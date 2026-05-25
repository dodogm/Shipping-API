import { Router } from "express";

import { usersRouter } from "./users-routes";
import { sessionRoutes } from "./sessions-routes";
import { deliveriesRouter } from "./deliveries-routes";

const routes = Router()

routes.use("/users", usersRouter)
routes.use("/sessions", sessionRoutes)
routes.use("/deliveries", deliveriesRouter)

export {routes}