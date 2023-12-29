import { Outlet } from 'react-router-dom';

export default function BaseLayout() {
    return (
        <div className="mx-auto w-full max-w-7xl">
            <Outlet />
        </div>
    );
}
