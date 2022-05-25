import { Router } from "express";
const user_controller = require("../controller/user.controller");
const { handled_method } = require("../controller/application.controller");

const router: Router = Router();

router.post("/users", handled_method(user_controller.create));

router.get("/users", handled_method(user_controller.findAll));

router.get("/users/:id", handled_method(user_controller.findById));

router.put("/users/:id", handled_method(user_controller.update));

router.delete("/users/:id", handled_method(user_controller.remove));

export default router;
