import { Router } from "express";

import { DeliveriesLogsController } from "@/controllers/delivery-logs-controller";

import { ensureAuthencated } from "@/middlewares/ensure-authenticated";
import { verifyUserAthorization } from "@/middlewares/verify-user-authorization";

const deliveriesLogsRoutes = Router()
const deliveriesLogsController = new DeliveriesLogsController()

deliveriesLogsRoutes.post("/", ensureAuthencated, verifyUserAthorization(["sale"]), deliveriesLogsController.create)
deliveriesLogsRoutes.get("/:delivery_id/show", ensureAuthencated, verifyUserAthorization(["sale", "customer"]), deliveriesLogsController.show)

export {deliveriesLogsRoutes}