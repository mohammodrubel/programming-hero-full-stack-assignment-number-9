import { Router } from 'express';
import IdeaController from './ideas.controller';


const router = Router();

router
  .route('/')
  .post(IdeaController.CreateIdea)
  .get(IdeaController.GetAllIdea);

router
  .route('/:id')
  .get(IdeaController.GetSingleIdea)
  .patch(IdeaController.UpdateIdea)
  .delete(IdeaController.DeleteIdea);

export const IdeaRouter = router;