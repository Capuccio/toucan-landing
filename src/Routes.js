/** @format */

import { createBrowserRouter } from 'react-router-dom'

import { Home, ContactUs } from './pages'

import { Navbar } from './components'

const router = createBrowserRouter([
	{
		path: '/',
		element: <Navbar />,
		children: [
			{
				index: true,
				element: <Home />,
			},
			{
				path: '/contact-us',
				element: <ContactUs />,
			},
		],
	},
	{
		path: '*',
		element: <p>404 mijo</p>,
	},
])

export default router
