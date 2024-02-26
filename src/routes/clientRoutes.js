import { Router } from "express";
import { clientSchema } from "../schemas/clientsSchema.js";
import { validateSchema } from "../middlewares/validateMid.js";
import { getClientByIdControll, ClientController } from "../controllers/clientsControll.js";

const clientsRouter = Router()

clientsRouter.post("/clients", validateSchema(clientSchema), ClientController);
clientsRouter.get("/clients/:id/orders", getClientByIdControll)

export default clientsRouter;