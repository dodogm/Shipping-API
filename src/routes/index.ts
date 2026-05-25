import { Router } from "express";

import { usersRouter } from "./users-routes";
import { sessionRoutes } from "./sessions-routes";
import { deliveriesRouter } from "./deliveries-routes";
import { deliveriesLogsRoutes } from "./deliveries-logs-routes";

const routes = Router()

routes.use("/users", usersRouter)
routes.use("/sessions", sessionRoutes)
routes.use("/deliveries", deliveriesRouter)
routes.use("/logs", deliveriesLogsRoutes)

export {routes}