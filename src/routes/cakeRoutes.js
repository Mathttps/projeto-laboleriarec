import { Router } from "express";
import { cakeSchema } from "../schemas/cakesSchema.js";
import { validateSchema } from "../middlewares/validateMid.js";
import { CakeController } from "../controllers/cakesControll.js";


const cakesRouter = Router()

cakesRouter.post("/cakes", validateSchema(cakeSchema), CakeController);

export default cakesRouter;