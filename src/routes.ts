// Router
import { Router } from "express";
const router = Router(); // defined

// controllers imports
import { Users } from "./controllers/UsersController"

// declare controllers
const handleControllerUsers = new Users()

/* =-=-=-=-=-=-= ROUTES =-=-=-=-=-= */
router.post("/createUsers", handleControllerUsers.getCredentials)

export {router};