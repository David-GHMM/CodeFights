import React from 'react';

type PasswordResetProps = {};

const PasswordReset:React.FC<PasswordResetProps> = () => {
    
    return (
		<form className='space-y-6 px-6 lg:px-8 pb-4 sm:pb-6 xl:pb-8'>
			<h3 className='text-xl font-medium  text-black'>Reset Password</h3>
			<p className='text-sm text-black '>
				Forgotten your password? Enter your e-mail address below, and we&apos;ll send you an e-mail allowing you
				to reset it.
			</p>
			<div>
				<input
					type='email'
					name='email'
					id='email'
					className='border-2 outline-none sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5
                    bg-gray-600 border-gray-500 placeholder-gray-400 text-white'
					placeholder='Email Address'
				/>
			</div>

			<button
				type='submit'
				className='w-full text-white  focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center 
                bg-buttons-color hover:bg-buttons-color-s'
			>
				Reset Password
			</button>
		</form>
	);
};

export default PasswordReset;
