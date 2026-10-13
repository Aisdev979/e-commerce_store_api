import carProducts from "../models/data.models.js"

export const getAllProducts = async (req, res) => {
  const {manufacturer, size, page = 1, limit = 5} = req.query;

  let productLists = [...carProducts];

  if( manufacturer ) {
    productLists = productLists.filter(product => product.manufacturer.toLowerCase() === manufacturer.toLowerCase());
  }

  if( size ) {
    productLists = productLists.filter(product => product.size.toLowerCase() === size.toLowerCase());
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
