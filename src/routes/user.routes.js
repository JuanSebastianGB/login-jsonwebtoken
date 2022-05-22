import { createUser } from '../controllers/user.controller';
import { Router } from 'express';
import { authJwt, validations } from '../middlewares';

const router = Router();

router.post('/', [authJwt.verifyToken, authJwt.isAdmin, validations.checkRolesExisted, validations.checkDuplicateUsernameOrEmail], createUser);

export default router;
