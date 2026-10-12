import express from 'express';
import errorMiddleware from './middlewares/error.middlewares.js';

const APP = express()
  
APP.use(express.json());

APP.get('/', (req, res) => {
  res.send('Welcome to the E-commerce Book Store API!');
});

APP.use(errorMiddleware);

export default APP;
