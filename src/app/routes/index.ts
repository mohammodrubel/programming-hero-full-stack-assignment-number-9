import express from 'express';
import { AuthRoutes } from '../modules/auth/auth.routes';
import { CategoryRouter } from '../modules/category/category.router';
import { CommentsRouter } from '../modules/comments/comments.router';
import { IdeaRouter } from '../modules/ideas/ideas.router';
import { userRouter } from '../modules/user/user.router';
import VoteRouter from '../modules/vote/vote.router';

const router = express.Router();

type Route = {
    path: string;
    route: express.Router;
};

const routes: Route[] = [
    {
        path: '/auth',
        route: AuthRoutes,
    },
    {
        path: '/idea',
        route: IdeaRouter,
    },
    {
        path: '/user',
        route: userRouter
    },
    {
        path: '/category',
        route: CategoryRouter
    },
    {
        path: '/comments',
        route: CommentsRouter
    },
    {
        path: '/vote',
        route: VoteRouter
    }

];

routes.forEach((route) => {
    router.use(route.path, route.route);
});

export default router;
