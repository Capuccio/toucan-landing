/** @format */

import { useState, useEffect } from 'react'

export default function useFetchAndLoad() {
	const [loading, setLoading] = useState(false)

	const callEndpoint = async (fetchEndpoint) => {
		setLoading(true)
		try {
			let result = await fetchEndpoint
			setLoading(false)
			return result
		} catch (error) {
			setLoading(false)
			throw error
		}
	}

	useEffect(() => {
		return () => {
			//console.log('Abort controller')
		}
	}, [])

	return { loading, callEndpoint }
}
