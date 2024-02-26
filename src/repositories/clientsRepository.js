import { db } from "../database/db.connection.js";

export async function insertClientRepository(name, address, phone) {
  try {
    return await db.query(
      `INSERT INTO clients("name", "address", "phone") VALUES ($1, $2, $3)`,
      [name, address, phone]
    );
  } catch (error) {
    throw error;
  }
}

export async function getClientOrdersByIdRepository(clientid) {
  try {
    return await db.query(`
      SELECT orders.id, orders.quantity, orders.totalprice, orders.createdAt, cakes.name
      FROM orders
      JOIN clients ON orders.clientid = clients.id
      JOIN cakes ON cakes.id = orders.cakeid
      WHERE clients.id = $1
      GROUP BY orders.id, cakes.id
      ORDER BY orders.id, cakes.id ASC`, [clientid]);
  } catch (error) {
    throw error;
  }
}

export async function getClientByIdRepository(clientid) {
  try {
    return await db.query('SELECT * FROM clients WHERE id = $1', [clientid]);
  } catch (error) {
    throw error;
  }
}


