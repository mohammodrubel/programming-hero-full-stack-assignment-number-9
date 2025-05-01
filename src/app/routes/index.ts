import express from 'express';
import { AuthRoutes } from '../modules/auth/auth.routes';
import { CategoryRouter } from '../modules/category/category.router';
import { userRouter } from '../modules/user/user.router';

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
        path: '/user',
        route: userRouter
    },
    {
        path: '/category',
        route: CategoryRouter
    }

];

routes.forEach((route) => {
    router.use(route.path, route.route);
});

export default router;
