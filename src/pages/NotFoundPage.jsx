import NavLink from '../components/NavLink'
import routes from '../routes/helper'

export default function NotFoundPage() {
	return (
		<>
			<h1 className='text-2xl'>Not Found Page</h1>
			<NavLink to={routes.home()} fontWeight='medium' exact replace>
				Go to home
			</NavLink>
		</>
	)
}
