import { Router } from 'express';
import { UserController } from './user.controller';

const router = Router();

router.get('/', UserController.GetAllUsers);
router
  .route('/:id')
  .get(UserController.GetSingleUser)
  .delete(UserController.DeleteUser);

export const userRouter = router;
