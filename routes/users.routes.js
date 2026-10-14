import { Router } from "express"
import { getAllUsers } from "../controllers/users.controller.js"

const usersRoute = Router()

usersRoute.get("/users", getAllUsers);

export default usersRoute
