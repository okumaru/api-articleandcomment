const express = require("express");
const commentRoute = require("../Controllers/comment.controller");
const router = express.Router();

// get all comment
router.get("/", [commentRoute.getAll]);

// get one comment by id
router.get("/:id", [commentRoute.getOneById]);

// add one comment
router.put("/", [commentRoute.add]);

// update comment by id
router.post("/:id", [commentRoute.updateById]);

// delete comment by id
router.delete("/:id", [commentRoute.deleteById]);

module.exports = router;
