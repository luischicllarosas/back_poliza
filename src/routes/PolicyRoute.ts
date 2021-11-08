import { Router } from "express";
import PolicyController from "../controllers/PolicyController";

const router: Router = Router()

router.post('/', PolicyController.addPolicy)
router.get('/', PolicyController.getAllPolicy)

export default router