import { authModalState } from '@/atoms/authModalAtom';
import { useAtom } from 'jotai';
import Link from 'next/link';
import React from 'react';

type NavigationBarProps = {};

const NavigationBar:React.FC<NavigationBarProps> = () => {
    const [, setAuthModalState] = useAtom(authModalState);

    const handleClick = () => {
        setAuthModalState((prev) => ({...prev, isOpen: true}));
    };
 
    return (
        <div className='flex px-2 sm:px-12 md:px-24 align-center justify-between'>
            <Link href='/' className='flex items-center justify-center h-24'>
                <img src='/logo/black_on_trans.png' alt='FightCode' className='h-full' />
            </Link>
            <div className='flex items-center'> 
                <button className='bg-buttons-color text-white px-2 py-1 sm:px-4 rounded-md text-sm font-medium
                hover:text-buttons-color hover:bg-white hover:border-2 hover:border-buttons-color border-2 border-transparent
                transition duration-300 ease-in-out'
                onClick={handleClick}
                >
                    Sign In
                </button>
            </div>
        </div>
    );
};

export default NavigationBar;