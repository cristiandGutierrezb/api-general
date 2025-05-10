import express from "express";

import { getAll } from "../controllers/tasks.controller.js";

const router = express.Router()

router.get('/', getAll)

export default router;
