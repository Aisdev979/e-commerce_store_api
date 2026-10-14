import products from "../models/products.models.js";
import users from "../models/users.models.js";

export const getAllProducts = async (req, res) => {
  const {manufacturer, size, page = 1, limit = 5} = req.query;

  let productLists = [...products];

  if( manufacturer ) {
    productLists = productLists.filter(product => product.manufacturer.toLowerCase() === manufacturer.toLowerCase());
  }

  if( size ) {
    productLists = productLists.filter(product => product.size.label.toLowerCase() === size.toLowerCase());
  }

  const pageNum = Number.parseInt(page);
  const limitNum = Number.parseInt(limit);

  const startIndex = (pageNum - 1) * limitNum;
  const endIndex = pageNum * limitNum;

  const paginatedResult = productLists.splice(startIndex, endIndex);

  res.status(200).json({
    success: true,
    meta: {
      totalRecord: productLists.length,
      curentPage: pageNum,
      totalPags: Math.ceil(productLists.length / limitNum),
    },
    data: paginatedResult
  })
}


export const getProduct = (req, res) => {
  const { productId } = req.params;

  if(!productId) {
    const error = new Error("Please provide and ID, can't be empty");
    error.statusCode = 400;
    throw error;
  }

  const carProduct = products.find(product => product.id === Number.parseInt(productId));

  if(!carProduct) {
    const error = new Error("Parts not found");
    error.statusCode = 404;
    throw error;
  }

  res.status(200).json({
    success: true,
    meta: {
      length: carProduct.length
    },
    data: carProduct
  })
}

export const postProduct = (req, res) => {
  const { userId } = req.params;
  const data = req.body;

  if(!userId) {
    const error = new Error("provided and ID to proceed");
    error.statusCode = 400;
    throw error;
  }

  const manufacturer = users.find(user => user.id === userId);

  if(!manufacturer) {
    const error = new Error("User not found");
    error.statusCode = 404;
    throw error;
  }

  const lastProductId = products[products.length - 1].id;
  console.log(lastProductId)
  const [lastProductLetters , lastProductDigit] = lastProductId.split("_");

  const incrementLastProductDitgit = Number.parseInt(lastProductDigit) + 1;

  const newProductId = `${lastProductLetters}_${incrementLastProductDitgit}`;

  const newProductData = {
    id: newProductId,
    user_id: userId,
    ...data
  }

  products.push(newProductData),

    console.log(products)

  res.status(201).json({
    success: true,
    message: "Product added successfully",
    newProductData
  })
}
