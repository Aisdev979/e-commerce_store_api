import express from 'express';
import errorMiddleware from './middlewares/error.middlewares.js';

const APP = express()
  
APP.use(express.json());

APP.get('/', (req, res) => {
  res.send('Welcome to the E-commerce Book Store API!');
});

APP.get('/test', (req, res, next) => {
  try {
    const age = 18
    if(age === 18)  throw new Error('error from age');
    res.send('yes')
  } catch(err) {
    next(err)
  }
})

APP.use(errorMiddleware);

export default APP;
