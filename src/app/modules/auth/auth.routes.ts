import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import AuthController from './auth.controller';
import AuthValidation from './auth.validation';

const router = express.Router();

router.post(
  '/login',
  validateRequest(AuthValidation.LoginSchema),
  AuthController.Login,
);

router.post(
  '/register',
  validateRequest(AuthValidation.RegisterSchema),
  AuthController.Register,
);

router.patch(
  '/change-password',
  // auth(UserRole.ADMIN, UserRole.INSTRUCTOR, UserRole.CANDIDATE),
  validateRequest(AuthValidation.ChangePasswordSchema),
  AuthController.ChangePassword,
);

export const AuthRoutes = router;
