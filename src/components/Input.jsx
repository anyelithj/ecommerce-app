import React from 'react'

function Input({ labelText, attribute, onChange }) {
	return (
		<div className='flex justify-center'>
			<div className='mb-3 w-full'>
				<label
					htmlFor={attribute.id}
					className='form-label text-sm inline-block mb-2 text-gray-700'
				>
					{labelText}
				</label>
				<input
					id={attribute.id}
					name={attribute.name}
					placeholder={attribute.placeholder}
					type={attribute.type}
					className={
						`form-control
          block
          w-full
          px-3
          py-1.5
          text-base
          font-normal
          text-gray-700
          bg-white bg-clip-padding
          border border-solid border-gray-300
          rounded
          transition
          ease-in-out
          m-0
          min-h-[75%]
          focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none focus:shadow-[0px_0px_0px_0.125em_#3483fa] focus:border-transparent ` +
						attribute.className
					}
					required={attribute.required}
					value={attribute.value}
					ref={attribute.ref}
					onChange={onChange}
				/>
			</div>
		</div>
	)
}

export default Input
