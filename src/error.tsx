import { useRouteError } from 'react-router-dom';

export default function ErrorPage() {
    const error = useRouteError() as RouteError;
    return (
        <div className="w-full h-screen flex flex-col items-center justify-center">
            <h1>Oops!</h1>
            <p>Sorry, an unexpected error has occurred.</p>
            <p>
                <i>{error.statusText || error.message}</i>
            </p>
        </div>
    );
}
