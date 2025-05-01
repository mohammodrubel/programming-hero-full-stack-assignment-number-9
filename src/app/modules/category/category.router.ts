import { Router } from 'express';
import CategoryController from './category.controller';


const router = Router();

router
  .route('/')
  .post(CategoryController.CreateCategory)
  .get(CategoryController.GetAllCategory);

router
  .route('/:id')
  .get(CategoryController.GetSingleCategory)
  .patch(CategoryController.UpdateCategory)
  .delete(CategoryController.DeleteCategory);

export const CategoryRouter = router;