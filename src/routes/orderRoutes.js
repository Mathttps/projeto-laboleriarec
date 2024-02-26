import { Router } from "express";
import { orderSchema } from "../schemas/ordersSchema.js";
import { validateSchema } from "../middlewares/validateMid.js";
import { OrderController, getOrderController, getOrderByIdController } from "../controllers/ordersControll.js";

const ordersRouter = Router()

ordersRouter.post("/orders", validateSchema(orderSchema), OrderController);
ordersRouter.get("/orders", getOrderController)
ordersRouter.get("/orders/:id", getOrderByIdController)

export default ordersRouter;