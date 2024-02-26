import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import router from "./routes/indexRoute.js";

const app = express();

dotenv.config();
app.use(express.json());
app.use(cors());
app.use(router)

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`O servidor esta logado na porta ${port}`));