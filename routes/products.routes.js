import { Router }  from "express"

import { getAllProducts, getProduct } from "../controllers/products.controllers.js"

const productRoute = Router()

productRoute.get("/products", getAllProducts);
productRoute.get("/products/:productId", getProduct);

export default productRoute
