import { Router }  from "express"

import { getAllProducts, getProduct, postProduct } from "../controllers/products.controllers.js"

const productRoute = Router()

productRoute.get("/products", getAllProducts);
productRoute.get("/products/:productId", getProduct);
productRoute.post("/products/:userId", postProduct);

export default productRoute
