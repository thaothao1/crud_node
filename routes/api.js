const express = require("express");
const router = express.Router();
const db = require("../models/alien");

router.get("/", async (req, res) => {
  try {
    const data = await db.find();
    res.json(data);
  } catch (err) {
    res.send("Error " + err);
  }
});

router.get("/:id", async (req, res) => {
  try {
    const data = await db.findById(req.params.id);
    res.json(data);
  } catch (err) {
    res.send("Error " + err);
  }
});

router.post("/", async (req, res) => {
  const data = new db({
    name: req.body.name,
    tech: req.body.tech,
    sub: req.body.sub,
  });
  try {
    const a1 = await data.save();
    res.json(a1);
  } catch (err) {
    res.send("Error");
  }
});

module.exports = router;
