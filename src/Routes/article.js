const express = require("express");
const articleController = require("../Controllers/article.controller");
const router = express.Router();

// get all articles
router.get("/", [articleController.getAll]);

// get one article by id
router.get("/:id", [articleController.getOneById]);

// add one article
router.put("/", [articleController.add]);

// update article by id
router.post("/:id", [articleController.updateById]);

// delete article by id
router.delete("/:id", [articleController.deleteById]);

module.exports = router;
