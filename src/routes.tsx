import { RouteObject } from 'react-router-dom';
import ErrorPage from './error';

const routes: RouteObject[] = [
    {
        path: '/',
        errorElement: <ErrorPage />,
        lazy: async () => {
            const { App } = await import('./App');
            return { Component: App };
        },
        children: [
            {
                path: '/dashboard',
                errorElement: <ErrorPage />,
                lazy: async () => {
                    const { Dashboard } = await import('@pages/dashboard');
                    return { Component: Dashboard };
                },
            },
        ],
    },
    {
        path: '/sign-in',
        errorElement: <ErrorPage />,
        index: true,
        lazy: async () => {
            const { SignIn } = await import('@pages/sign-in');
            return { Component: SignIn };
        },
    },
    {
        path: '/sign-up',
        errorElement: <ErrorPage />,
        lazy: async () => {
            const { SignUp } = await import('@pages/sign-up');
            return { Component: SignUp };
        },
    },
];

export default routes;
