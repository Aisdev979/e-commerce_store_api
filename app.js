import express from 'express';
import errorMiddleware from './middlewares/error.middlewares.js';
import productRoute from "./routes/products.routes.js";
import usersRoute from "./routes/users.routes.js"

const app = express();

app.use(express.json());

app.use("/api/v1", productRoute);
app.use("/api/v1", usersRoute)

app.get('/', (req, res) => {
  res.send('Welcome to the E-commerce Car Part Store API!');
});

app.use(errorMiddleware);

export default app;
