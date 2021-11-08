import { Router } from "express";
import PersonRoutes from "./PersonRoute"
import PolicyRoutes from "./PolicyRoute"

const router: Router = Router()

router.use('/person', PersonRoutes)
router.use('/policy', PolicyRoutes)

export default router