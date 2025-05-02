import { Router } from 'express';
import VoteController from './vote.controller';


const router = Router();

router
  .route('/')
  .post(VoteController.AddedNewVote)
  .get(VoteController.getAllVote);

router
  .route('/:id')
  .get(VoteController.GetSingleVote)
  .patch(VoteController.UpdateSingleVote)
  .delete(VoteController.DeleteSingleVote);

const VoteRouter = router 

export default VoteRouter