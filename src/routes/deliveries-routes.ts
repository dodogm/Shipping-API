import { Router } from "express";

import { DeliveriesController } from "@/controllers/deliveries-controller";
import { DeliverisStatusController } from "@/controllers/delivery-status-controller";

import { ensureAuthencated } from "@/middlewares/ensure-authenticated";
import { verifyUserAthorization } from "@/middlewares/verify-user-authorization";


const deliveriesRouter = Router()
const deliveriesController = new DeliveriesController()
const deliverisStatusController = new DeliverisStatusController()

deliveriesRouter.use(ensureAuthencated, verifyUserAthorization(["sale"]))
deliveriesRouter.post("/", deliveriesController.create)
deliveriesRouter.get("/", deliveriesController.index)

deliveriesRouter.patch("/:id/status", deliverisStatusController.update)


export {deliveriesRouter}