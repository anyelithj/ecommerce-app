import React, { useState } from 'react'
import {FcGoogle} from 'react-icons/fc'
import {FaFacebookSquare} from 'react-icons/fa'
import Input from '../components/Input'

// Img
import logo from '../assets/img/logo__large_plus.png'

function Login() {
	// Show Continue
	const [activeContinue, setActiveContinue] = useState(false)

	const showContinue = () => {
		setActiveContinue(!activeContinue)
	}

	const handleSubmit = (e) => {
		console.log(e)
	}

	return (
		<div className='relative md:bg-[#ebebeb] h-screen '>
			{/* Header */}
			<header className='bg-[#fff059] p-2 md:h-56'>
				<img className='w-100' src={logo} alt='logo' />
			</header>

			{/* Form */}
			<div className='md:w-screen md:h-1/3 md:flex md:flex-col md:justify-center md:items-center'>
				<div className='px-6 mt-7'>
					<div className='md:bg-white md:px-16 md:pt-14 md:pb-10 md:w-[440px] md:rounded-t-md md:shadow-sm'>
						<div>
							{!activeContinue && (
								<p className='text-lg md:text-2xl font-semibold'>
									Hello! to continue, enter your phone, e-mail or username
								</p>
							)}
							{activeContinue && (
								<p className='text-lg md:text-2xl font-semibold'>
									Now, your Mercado Libre password
								</p>
							)}
						</div>
						<form onSubmit={handleSubmit}>
							<div className='mt-8'>
								{!activeContinue && (
									<Input
										labelText='Telephone, e-mail or user'
										attribute={{
											id: 'name',
											name: 'name',
											type: 'email',
											placeholder: '',
											className: '',
											required: true,
										}}
									/>
								)}
								{activeContinue && (
									<Input
										labelText='Password'
										attribute={{
											id: 'password',
											name: 'password',
											type: 'password',
											placeholder: '',
											className: '',
											required: true,
										}}
									/>
								)}
							</div>
							<div className='mt-8'>
								{!activeContinue && (
									<button
										onClick={showContinue}
										className='bg-blue-500 text-white w-full font-medium text-sm rounded-md py-3.5 '
									>
										Continue
									</button>
								)}
								{activeContinue && (
									<button
										type='submit'
										className='bg-blue-500 text-white w-full font-medium text-sm rounded-md py-3.5 '
									>
										Enter
									</button>
								)}
								<button className='text-blue-500 font-medium w-full text-sm p-3'>
									Create Account
								</button>
							</div>
						</form>
					</div>

					<div className='py-6 rounded-b-md bg-white border-t justify-center items-center h-6 shadow-sm hidden md:flex '>
						<a
							className='flex items-center gap-3 w-max mx-auto my-10'
							href='https://backendnodejstzuzulcode.uw.r.appspot.com/api/auth/google'
						>
							<FcGoogle /> Google
						</a>
						<a
							className='flex items-center gap-3 w-max mx-auto my-10'
							href='https://backendnodejstzuzulcode.uw.r.appspot.com/api/auth/facebook'
						>
							<FaFacebookSquare /> Facebook
						</a>
					</div>
				</div>
			</div>

			{/* Footer */}
			<div className='absolute bottom-0 px-6 left-0 w-full justify-center items-center md:bg-white'>
				<div className='py-4 flex flex-col justify-center items-center space-y-1 md:bg-white md:py-7'>
					<p className='text-sm'>How we take care of your privacy</p>
					<p className='text-xs text-gray-500'>Copyright © 1999-2022 MercadoLibre S.R.L.</p>
				</div>
			</div>
		</div>
	)
}

export default Login
