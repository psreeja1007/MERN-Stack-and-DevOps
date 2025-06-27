import express from "express"

import {
    createNewCategory,getAllProducts,createNewProduct,getAllCategories
} from "../app/controllers/productsController.js";

const ProductRouter = express.Router();

ProductRouter.post('/create/category', createNewCategory);
ProductRouter.get('/all/products', getAllProducts);
ProductRouter.post('/create/new/product', createNewProduct);
ProductRouter.get('/categories', getAllCategories);

export default ProductRouter;