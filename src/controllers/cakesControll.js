import { insertCakeRepository, getCakeByNameRepository } from "../repositories/cakesRepository.js";

export async function CakeController(req, res){
  const { name, price, image, description } = req.body;
  try {
    const hasTheSameName = await getCakeByNameRepository(name);
    if (hasTheSameName.rows.length !== 0) {
      return res.status(409).send("Cake with this name already exists.");
    }
    await insertCakeRepository({ name, price, image, description });
    res.status(201).send("Cake saved successfully.");
  } catch (error) {
    res.status(500).send(`Error while saving the cake ${error.message}`);
  }
}
