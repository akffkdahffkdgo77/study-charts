import { ReactNode } from 'react';

import Gnb from './Gnb';

interface Props {
    children: ReactNode;
}

export default function Header({ children }: Props) {
    return (
        <header className="fixed left-0 right-0 top-0 flex w-full items-center justify-between px-10 py-5 shadow-md">
            <h1 className="text-4xl font-bold text-gradient">Study Charts</h1>
            <div className="flex items-center gap-2.5">
                {children}
                <Gnb />
            </div>
        </header>
    );
}
