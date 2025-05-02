import { Router } from 'express';
import CommentsController from './comments.controller';


const router = Router();

router
    .route('/')
    .post(CommentsController.CreateNewComments)
    .get(CommentsController.GetAllComments);

router
    .route('/:id')
    .get(CommentsController.GetSingleComments)
    .patch(CommentsController.UpdateComments)
    .delete(CommentsController.DeleteComments);

export const CommentsRouter = router;