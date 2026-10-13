import dotenv from 'dotenv';
import app from "./app.js";

dotenv.config();

const PORT = process.env.PORT || 5000
app.listen(3000, () => {
  console.log(`server running on port ${PORT}`);
})
