import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

const styles = {
	blue: {
		normal: 'text-blue-500 hover:text-blue-700',
		active: 'text-blue-700 cursor-default',
	},
	gray: {
		normal: 'text-gray-500 hover:text-gray-700',
		active: 'text-gray-700 cursor-default',
	},
	fontWeight: {
		normal: 'font-normal',
		medium: 'font-medium',
	},
}

function useNavLink({ to, exact }) {
	const regExp = new RegExp(`^${to}${exact ? '$' : ''}`)
	const { pathname } = useLocation()
	const [state, setState] = useState('normal')

	useEffect(() => {
		setState(regExp.test(pathname) ? 'active' : 'normal')
	}, [pathname])

	return state
}

/**
 * @typedef {import('react-router-dom').LinkProps &
 * {exact?: boolean,
 * 	variant?: ('blue'|'gray'),
 * 	fontWeight?: ('normal'|'medium')
 * }} NavLinkProps
 */

/**
 * @param {NavLinkProps} props
 */
export default function NavLink({
	children,
	to,
	exact = false,
	variant = 'blue',
	fontWeight = 'normal',
	...props
}) {
	const state = useNavLink({ exact, fontWeight })

	return (
		<Link
			className={`${styles.fontWeight[fontWeight]} ${styles[variant][state]}`}
			to={to}
			{...props}
		>
			{children}
		</Link>
	)
}
