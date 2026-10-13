import { Router }  from "express"

import { getAllProducts } from "../controllers/products.controllers.js"

const productRoute = Router()

productRoute.get("/products", getAllProducts);

export default productRoute
