import { Router } from "express";

import { DeliveriesController } from "@/controllers/deliveries-controller";

import { ensureAuthencated } from "@/middlewares/ensure-authenticated";
import { verifyUserAthorization } from "@/middlewares/verify-user-authorization";


const deliveriesRouter = Router()
const deliveriesController = new DeliveriesController()

deliveriesRouter.use(ensureAuthencated, verifyUserAthorization(["sale"]))
deliveriesRouter.post("/", deliveriesController.create)

export {deliveriesRouter}