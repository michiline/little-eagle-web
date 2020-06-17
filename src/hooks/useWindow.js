import { useState, useEffect } from 'react'

const useWindow = () => {
	const [width, setWidth] = useState(window.innerWidth)
	const [height, setHeight] = useState(window.innerHeight)

	useEffect(() => {
		const listener = () => {
			setWidth(window.innerWidth)
			setHeight(window.innerHeight)
		}
		window.addEventListener('resize', listener)
		return () => window.removeEventListener('resize', listener)
	},[])
	return [width, height]
}

export default useWindow