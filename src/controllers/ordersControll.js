import { getCakeByIdd } from "../repositories/cakesRepository.js";
import { getClientByIdRepository } from "../repositories/clientsRepository.js";
import { insertOrderRepository, getOrderReposit, getOrderByIdRepository } from "../repositories/ordersRepository.js";


export async function getOrderController(req, res){
  const { date } = req.query;
  try {
    const orders = await getOrderReposit(date);
    if (!orders.rowCount) {
      return res.status(404).send([]);
    }
    const formattedOrders = orders.rows.map((data) => ({
      client: {
        id: data.clientsid,
        name: data.clientName,
        address: data.address,
        phone: data.phone
      },
      cake: {
        id: data.cakesid,
        name: data.cakeName,
        price: data.price,
        description: data.description,
        image: data.image
      },
      orderId: data.id,
      createdAt: data.time,
      quantity: data.quantity,
      totalPrice: +data.totalprice
    }));
    res.status(200).send(formattedOrders);
  } catch (error) {
    res.status(500).send(`Error while getting the orders ${error.message}`);
  }
}

export async function OrderController(req, res){
  const { clientId, cakeId, quantity, totalPrice } = req.body;
  try {
    await insertOrderRepository(clientId, cakeId, quantity, totalPrice);
    res.sendStatus(201);
  } catch (error) {
    res.status(500).send(`Error while saving the order ${error.message}`);
  }
}

export async function getOrderByIdController(req, res){
  const { id } = req.params;
  try {
    const ordersData = await getOrderByIdRepository(id);
    if (ordersData.rowCount === 0) {
      return res.sendStatus(404);
    }
    
    const [orders] = ordersData.rows;

    const [cakeData, clientData] = await Promise.all([
      getCakeByIdd(orders.cakeid),
      getClientByIdRepository(orders.clientid)
    ]);

    const order = {
      client: clientData.rows,
      cake: cakeData.rows,
      createdAt: orders.createdAt,
      totalPrice: orders.totalprice,
      quantity: orders.quantity,
    };
    res.status(200).send(order);
  } catch (error) {
    res.status(500).send(`Error while getting order by id ${error.message}`);
  }
}
