import { Link } from 'react-router-dom'
import routes from '../routes/helper'

export default function NotFoundPage() {
	return (
		<>
			<h1 className='text-2xl'>Not Found Page</h1>
			<Link
				className='text-blue-400 hover:text-blue-600 hover:underline'
				to={routes.home()}
				replace
			>
				Go to home
			</Link>
		</>
	)
}
