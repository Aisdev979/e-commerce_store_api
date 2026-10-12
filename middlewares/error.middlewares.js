const errorMiddleware = (err, req, res, next) => {
  console.log(err)
  const statusCode = err.statusCode || err.status || 500;
  const message = err.message || "Internal Server Error";
  res.status(statusCode).json({
    status: "error",
    message: message,
  });
};

export default errorMiddleware;
