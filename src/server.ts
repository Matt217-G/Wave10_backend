import express from "express";
import "dotenv/config";
import ProductsRouter from "./routes/products.routes.js"

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.json());

app.use('/products', ProductsRouter)








app.listen(PORT, () => console.log("Server running on port: 3001"));
