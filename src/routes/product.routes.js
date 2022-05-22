import { Router } from 'express';
import {
  createProduct,
  getProducts,
  getProductById,
  updateProductById,
  deleteProductById
} from '../controllers/product.controller.js';
import { authJwt } from '../middlewares';

const router = Router();
const { verifyToken, isAdmin, isModerator } = authJwt;

router.post('/', [verifyToken, isAdmin], createProduct);
router.get('/', getProducts);
router.get('/:productId', getProductById);
router.put('/:productId', [verifyToken, isAdmin], updateProductById);
router.delete('/:productId', [verifyToken, isAdmin], deleteProductById);

export default router;
