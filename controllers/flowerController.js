const express = require("express");
const flowers = express.Router();

const {
  getAllFlowers,
  getFlower,
  createFlower,
  deleteFlower,
  updateFlower,
} = require("../queries/flowers.js");

//INDEX
flowers.get("/", async (req, res) => {
  const allFlowers = await getAllFlowers();
  if (allFlowers[0]) {
    res.status(200).json(allFlowers);
  } else {
    res.status(500).json({ error: "server error" });
  }
});

//SHOW ROUTE
flowers.get("/:id", async (req, res) => {
  const { id } = req.params;
  const flower = await getFlower(id);
  if (flower) {
    res.status(200).json(flower);
  } else {
    res.status(404).json({ error: "not found!" });
  }
});

//CREATE ROUTE
flowers.post("/", async (req, res) => {
  try {
    const flower = await createFlower(req.body);
    res.json(flower);
  } catch (error) {
    res.status(400).json({ error: error });
  }
});

// DELETE ROUTE
flowers.delete("/:id", async (req, res) => {
  const { id } = req.params;
  const deletedFlower = await deleteFlower(id);
  if (deletedFlower) {
    res.status(200).json(deletedFlower);
  } else {
    res.status(404).json("Flower not found");
  }
});

//UPDATE ROUTE
flowers.put("/:id", async (req, res) => {
  const { id } = req.params;
  const updatedFlower = await updateFlower(id, req.body);
  res.status(200).json(updatedFlower);
});

module.exports = flowers;
