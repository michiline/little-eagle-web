import React, { useEffect, useState } from 'react'
import { useRouteMatch, useHistory } from 'react-router-dom'
import { gallery } from '../../../images'
import { paginate } from '../../../utils'
import Justify from './justify'
import Swipe from './swipe'

const JustifySwipe = ({ galleryName, setShowSwipe }) => {
	const history = useHistory()
	const match = useRouteMatch()
	let lowRes = paginate({ images: JSON.parse(JSON.stringify(gallery[galleryName].low)), nPerPage: 20 })
	let highRes = JSON.parse(JSON.stringify(gallery[galleryName].high))
	const close = () => {
		const idIndex = history.location.pathname.lastIndexOf('/')
		const newUrl = history.location.pathname.substr(0, idIndex)
		history.push(newUrl)
	  }
	  const open = (id) => {
		const newUrl = `${history.location.pathname}/${id}`
		history.push(newUrl)
	  }
	  const changeUrl = (id) => {
		const idIndex = history.location.pathname.lastIndexOf('/')
		const newUrl = `${history.location.pathname.substr(0, idIndex)}/${id}`
		history.push(newUrl)
	  }
	return (
		<div>
			<Justify images={lowRes} open={open} />
			{match.params.activeImg && <Swipe images={highRes} close={close} changeUrl={changeUrl} setShowSwipe={setShowSwipe} />}
		</div>
	)
}

export default JustifySwipe