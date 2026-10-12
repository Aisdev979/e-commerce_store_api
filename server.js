import dotenv from 'dotenv';
import APP from "./app.js";

dotenv.config();

const PORT = process.env.PORT || 5000
APP.listen(3000, () => {
  console.log(`server running on port ${PORT}`);
})
