import { getOrderByIdController } from "./ordersControll.js";
import { getClientOrdersByIdRepository, insertClientRepository } from "../repositories/clientsRepository.js";


export async function getClientByIdControll(req, res) {
  const { id } = req.params;
  try {
    const orders = await getClientOrdersByIdRepository(id);   
    if (orders.rowCount === 0) {
      return res.sendStatus(404);
    }
    res.status(200).send({ Orders: orders.rows });
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
}

export async function ClientController(req, res) {
  const { name, address, phone } = req.body;
  try {
    await insertClientRepository(name, address, phone);
    res.sendStatus(201);
  } catch (error) {
    res.status(500).send(`Error while saving the client ${error.message}`);
  }
}


