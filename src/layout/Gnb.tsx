import { useEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const OPTIONS = [
    { name: 'Bar', to: '/' },
    { name: 'Bar', to: '/chartjs/bar' },
    { name: 'Bubble', to: '/chartjs/bubble' },
    { name: 'Donut', to: '/chartjs/donut' },
    { name: 'Line', to: '/chartjs/line' },
    { name: 'Pie', to: '/chartjs/pie' }
];

export default function Gnb() {
    const [isOpen, setIsOpen] = useState(false);
    const { pathname } = useLocation();

    const listRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (e: MouseEvent) => {
            const { target } = e;
            if (target && listRef.current && !listRef.current.contains(target as Node)) {
                setIsOpen(false);
            }
        };

        document.addEventListener('click', handleClickOutside);
        return () => document.removeEventListener('click', handleClickOutside);
    });

    return (
        <div ref={listRef} className="relative">
            <button type="button" onClick={() => setIsOpen((prev) => !prev)} className="w-40 rounded-md border border-orange-500 p-1 font-bold text-gradient">
                {OPTIONS.find((val) => val.to === pathname)?.name}
            </button>
            {isOpen && (
                <nav className="absolute top-11 z-10 w-40 rounded border bg-white py-1 shadow-md">
                    <ul className="flex max-h-40 flex-col divide-y overflow-y-auto">
                        {OPTIONS.slice(1).map((val) => (
                            <li key={val.name} className="h-10 flex-none leading-10 hover:opacity-50 hover:text-gradient">
                                <Link to={val.to} className="block w-full text-center font-medium">
                                    {val.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>
            )}
        </div>
    );
}
