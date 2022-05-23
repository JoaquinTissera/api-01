import { Router } from 'express';
import { create } from "../controller/user.controller";

const router: Router = Router();

router.get("/users", create)

export default router;