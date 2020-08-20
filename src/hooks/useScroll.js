import { useEffect } from 'react'

const useScroll = (history) => {
	useEffect(() => {
		const scrollListener = (e) => {
			history.push("", document.title, window.location.pathname
			+ window.location.search)
		  }
		  window.addEventListener('scroll', scrollListener)
		return () => window.removeEventListener('scroll', scrollListener)
	},[history])
	return []
}

export default useScroll