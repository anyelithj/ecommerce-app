import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import NotFoundPage from '../pages/NotFoundPage';
import routes from './helper';

export default function AppRoute() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path={routes.home()} element={<HomePage />} />
				<Route path='*' element={<NotFoundPage />} />
			</Routes>
		</BrowserRouter>
	)
}
