import { db } from "../database/db.connection.js";

export async function insertCakeRepository(name, price, image, description) {
  try {
    return await db.query(
      `INSERT INTO cakes("name", "price", "image", "description") VALUES ($1, $2, $3, $4)`,
      [name, price, image, description]
    );
  } catch (error) {
    throw error;
  }
}

export async function getCakeByIdd(cakeid) {
  try {
    return await db.query('SELECT * FROM cakes WHERE id = $1', [cakeid]);
  } catch (error) {
    throw error;
  }
}

export async function getCakeByNameRepository(name) {
  try {
    return await db.query(`SELECT * FROM cakes WHERE name=$1`, [name]);
  } catch (error) {
    throw error;
  }
}

