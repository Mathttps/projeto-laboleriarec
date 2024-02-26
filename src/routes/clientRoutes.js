import { Router } from "express";
import { clientSchema } from "../schemas/clientsSchema.js";
import { validateSchema } from "../middlewares/validateMid.js";
import { getClientByIdControll, ClientController } from "../controllers/clientsControll.js";

const clientsRouter = Router()

clientsRouter.get("/clients/:id/orders", getClientByIdControll)
clientsRouter.post("/clients", validateSchema(clientSchema), ClientController);


export default clientsRouter;