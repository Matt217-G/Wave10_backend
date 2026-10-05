import { Router } from "express";
import {
  getProducts,
  getProductsId,
  createProducts,
  updateProduct,
  deleteProducts,
} from "../controllers/products.controllers";

const router = Router();

router.get("/",getProducts);

router.get("/:id",getProductsId);

router.post("/",createProducts);

router.put("/:id",updateProduct);

router.delete("/:id",deleteProducts);

export default router;
