import { Router } from 'express';
import { signIn, signUp } from '../controllers/auth.controller.js';
import { validations } from '../middlewares/index.js';

const router = Router();

router.post('/signin', signIn);
router.post('/signup', [validations.checkDuplicateUsernameOrEmail, validations.checkRolesExisted], signUp);

export default router;
