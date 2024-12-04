import { authModalState } from '@/atoms/authModalAtom';
import { useAtom } from 'jotai';
import React from 'react';

type SignUpProps = {};

const SignUp:React.FC<SignUpProps> = () => {
    const [, setAuthModalState] = useAtom(authModalState);
    const handleClick = () => {
        setAuthModalState((prev) => ({...prev, type: 'login'}));
    };
    
    return (
        <form className='space-y-6 px-6 pb-4'>
            <h3 className='text-xl font-medium text-black'>Sign Up</h3>
            <div>
                <input type="userName" name="userName" id="userName" className='
                    border-2 outline-none sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5
                    bg-gray-600 border-gray-500 placeholder-gray-400 text-white'
                    placeholder='Username'/>
            </div>
            <div>
                <input type="email" name="email" id="email" className='
                    border-2 outline-none sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5
                    bg-gray-600 border-gray-500 placeholder-gray-400 text-white'
                    placeholder='Email Address'/>
            </div>
            <div>
                <input type="password" name="password" id="password" className='
                    border-2 outline-none sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5
                    bg-gray-600 border-gray-500 placeholder-gray-400 text-white'
                    placeholder='Password'/>
            </div>
            
            <button
                    type='submit'
                    className='w-full text-white focus:ring-blue-300 font-medium rounded-lg
                    text-sm px-5 py-2.5 text-center bg-buttons-color hover:bg-buttons-color-s'
                >
                    Sign Up
            </button>

            <div className='text-sm text-black'>
                Have an account?{" "}
                <a href="#" className='text-buttons-color-s hover:underline' onClick={handleClick}>
                    Sign In
                </a>
            </div>
        </form>
    );
};

export default SignUp;