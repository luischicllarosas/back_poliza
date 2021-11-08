import { Router } from "express";
import PersonController from "../controllers/PersonController";

const router: Router = Router()

router.post('/', PersonController.addPerson)
router.get('/', PersonController.getAllPerson)

export default router