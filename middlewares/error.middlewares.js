
const errorMiddleware = (err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    const message = err.message || 'Internal Server Error';

  const errorDetails = {
    method: req.method,
    url: req.originalUrl,
    route: req.route?.path || 'Route not matched',
    params: req.params,
    query: req.query,
    timestamp: new Date().toISOString(),
    stack: err.stack,
  };

  console.error('========== ERROR DETAILS ==========');
  console.error('Message:', message);
  console.error('Status Code:', statusCode);
  console.error('Method:', errorDetails.method);
  console.error('URL:', errorDetails.url);
  console.error('Route:', errorDetails.route);
  console.error('Params:', errorDetails.params);
  console.error('Query:', errorDetails.query);
  console.error('Timestamp:', errorDetails.timestamp);
  console.error('Stack:', errorDetails.stack);
  console.error('===================================');

  const response = {
    status: 'error',
    message,
    statusCode,
  };

  if (process.env.NODE_ENV === 'development')  {
    response.details = {...errorDetails}
  }

  res.status(statusCode).json(response);
}

export default errorMiddleware;
