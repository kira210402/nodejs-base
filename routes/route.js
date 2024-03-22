import express from "express";
import controller from "../controllers/controller.js";
const router = express.Router();

router.get('/', controller.getAll);

router.post('/', controller.createNew);

router.put('/:id', controller.update);

router.delete("/:id", controller.delete);

export default router;