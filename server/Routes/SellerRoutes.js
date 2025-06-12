import express from "express";
import { isSellerAuth, sellerLogin, sellerLogout } from "../controllers/sellerController.js";
import authSeller from "../middlewares/authSelller.js";

const SellerRoutes = express.Router();

SellerRoutes.post('/login',sellerLogin)
SellerRoutes.get('/is-auth', authSeller , isSellerAuth)
SellerRoutes.get('/logout',sellerLogout)

export default SellerRoutes;