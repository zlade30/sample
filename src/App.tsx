import { Outlet } from 'react-router-dom';
import { MainHeader } from '@components/headers';
import { MainMenu } from '@components/navs';

export const App = () => {
    return (
        <div className="w-full h-screen flex flex-col items-center justify-start">
            <MainHeader />
            <MainMenu />
            <Outlet />
        </div>
    );
};
