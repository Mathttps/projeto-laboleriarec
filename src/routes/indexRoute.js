import { Router } from "express";
import cakesRouter from "./cakeRoutes.js";
import ordersRouter from "./orderRoutes.js";
import clientsRouter from "./clientRoutes.js";



const router = Router();
router.use(cakesRouter);
router.use(clientsRouter);
router.use(ordersRouter);


export default router;