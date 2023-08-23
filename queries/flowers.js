const db = require("../db/dbConfig.js");

// ALL FLOWERS
const getAllFlowers = async () => {
  try {
    const allFlowers = await db.any("SELECT * FROM flowers");
    return allFlowers;
  } catch (error) {
    return error;
  }
};

// ONE FLOWER
const getFlower = async (id) => {
  try {
    const oneFlower = await db.one("SELECT * FROM flowers WHERE id=$1", id);
    return oneFlower;
  } catch (error) {
    return error;
  }
};

// CREATE (POST)
const createFlower = async (flower) => {
  try {
    const newFlower = await db.one(
      "INSERT INTO flowers (name, country,price, url,is_favorite) VALUES ($1, $2, $3, $4, $5) RETURNING *",
      [
        flower.name,
        flower.country,
        flower.price,
        flower.url,
        flower.is_favorite,
      ]
    );
    return newFlower;
  } catch (error) {
    return error;
  }
};

// DELETE
const deleteFlower = async (id) => {
  try {
    const deletedFlower = await db.one(
      "DELETE FROM flowers WHERE id = $1 RETURNING *",
      id
    );
    return deletedFlower;
  } catch (error) {
    return error;
  }
};

//UPDATE
const updateFlower = async (id, flower) => {
  try {
    const updatedFlower = await db.one(
      "UPDATE flowers SET name=$1, country=$2, population=$3, url=$4, is_favorite=$5 WHERE id =$6 RETURNING *",
      [
        flower.name,
        flower.country,
        flower.price,
        flower.url,
        flower.is_favorite,
        id,
      ]
    );
    return updatedFlower;
  } catch (error) {
    return error;
  }
};

module.exports = {
  getAllFlowers,
  getFlower,
  createFlower,
  deleteFlower,
  updateFlower,
};
