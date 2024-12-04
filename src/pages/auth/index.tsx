import { authModalState } from '@/atoms/authModalAtom';
import AuthModal from '@/components/Modals/AuthModal';
import NavigationBar from '@/components/NavigationBar/NavigationBar';
import {useAtom, useAtomValue, useSetAtom} from 'jotai';
import React from 'react';


type AuthPageProps = {};

const AuthPage:React.FC<AuthPageProps> = () => {
    const [authModal, ] = useAtom(authModalState);

    return (
        <div className='bg-gradient-to-b from-white to-gray-300 h-screen relative'>
            <div className='max-w-7xl mx-auto'>
                <NavigationBar />
                <div className="flex items-center justify-center h-[calc(100vh-6rem)] pointer-events-none select-none">
                    <img src="/hero2.png" alt="Hero" />
                </div>
                {authModal.isOpen && <AuthModal />}
            </div>
        </div>
    );
};

export default AuthPage;