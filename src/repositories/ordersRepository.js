import { db } from "../database/db.connection.js";

export async function insertOrderRepository(clientId, cakeId, quantity, totalPrice) {
  try {
    return await db.query(
      `INSERT INTO orders("clientId", "cakeId", "quantity", "createdAt", "totalPrice") 
      VALUES ($1, $2, $3, CURRENT_TIMESTAMP, $4)`,
      [clientId, cakeId, quantity, totalPrice]
    );
  } catch (error) {
    throw error;
  }
}

export async function getOrderByIdRepository(id) {
  try {
    return await db.query('SELECT * FROM orders WHERE id = $1', [id]);
  } catch (error) {
    throw error;
  }
}

export async function getOrderReposit(date) {
  try {
    let query = `
      SELECT orders.id, orders."clientId", orders."cakeId", orders.quantity, 
      TO_CHAR(orders."createdAt", 'YYYY-MM-DD HH24:MI') AS "createdAt",
      orders."totalPrice", clients.id AS clientsid, clients.name AS "clientName",
      clients.address, clients.phone, cakes.id AS cakesid, cakes.name AS "cakeName", 
      cakes.price, cakes.image, cakes.description
      FROM orders
      JOIN clients ON orders."clientId" = clients.id
      JOIN cakes ON orders."cakeId" = cakes.id
      WHERE 1=1`;

    const values = [];
    if (date) {
      values.push(date);
      query += ` AND TO_CHAR(orders."createdAt", 'YYYY-MM-DD') = $${values.length}`;
    }

    return db.query(query, values);
  } catch (error) {
    throw error;
  }
}


