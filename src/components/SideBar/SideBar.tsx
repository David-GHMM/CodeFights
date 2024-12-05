import Link from 'next/link';
import React from 'react';

type SideBarProps = {};

const SideBar:React.FC<SideBarProps> = () => {
    
    return (
        <nav className="list-none mb-4 w-64 flex-col flex p-5">
            <aside className="">
                <div className='flex justify-items-start box-border text-2xl font-bold mb-5'>
                    <Link href='/' className='flex justify-left h-12'>
                        <img src='/logo/black_on_white.png' alt='FightCode' className='h-full' />
                    </Link>
                    <p className='flex items-end align-text-bottom mb-1'>
                        CodeFights
                    </p>
                </div>
            </aside>
            <ul className="list-none mb-4">
                <li className="mb-4 hover:bg-active-sidebar-color transition duration-300 ease-in-out">
                    <a href="#" className="text-lg text-sidebar-text-color transition-colors duration-75"
                    >
                        Problems
                    </a>
                </li>
                <li className="mb-4 hover:bg-active-sidebar-color transition duration-300 ease-in-out">
                    <a href="#" className="text-lg text-sidebar-text-color transition-colors duration-75"
                    >
                        Explore
                    </a>
                </li>
                <li className="mb-4 hover:bg-active-sidebar-color transition duration-300 ease-in-out">
                    <a href="#" className="text-lg text-sidebar-text-color transition-colors duration-75"
                    >
                        Ratings
                    </a>
                </li>
                <li className="mb-4 hover:bg-active-sidebar-color transition duration-300 ease-in-out">
                    <a href="#" className="text-lg text-sidebar-text-color transition-colors duration-75"
                    >
                        About
                    </a>
                </li>
            </ul>
        </nav>
    );
};

export default SideBar;