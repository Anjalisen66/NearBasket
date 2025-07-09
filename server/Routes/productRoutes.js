import {upload} from '../configs/multer.js'
import express from 'express';
import authSeller from "../middlewares/authSelller.js";
import { addProduct, changeStock, getProducts, productById } from "../controllers/productController.js";

const productRouter = express.Router();

productRouter.post('/add',upload.array(["images"]),authSeller, addProduct);
productRouter.get('/list',getProducts);
productRouter.get('/:id',productById);
productRouter.post('/stock',authSeller,changeStock);

export default productRouter;
