import React, { useEffect } from 'react'
import { useRouteMatch } from 'react-router-dom'
import styled from 'styled-components'

import { useMouseTouchSwipe, useImages} from '../../../../hooks'
import { PreviousButton, NextButton, CloseSwipeButton } from '../../../../components'
import Image from './Image'

const Swipe = ({ images, close, changeUrl, setShowSwipe }) => {
  const match = useRouteMatch()
  const [swipeImages] = useImages({ images })
  const [previous, next] = useMouseTouchSwipe({ activeImg: parseInt(match.params.activeImg), length: images.length, changeUrl })
  useEffect(() => {
    document.querySelector('#swipeCarousel').style.setProperty('--i', parseInt(match.params.activeImg))
  })
  return (
    <SwipeGalleryContainer>
      <PreviousButton handleClick={previous}/>
      <SwipeCarousel id={'swipeCarousel'}>
        {renderImages({ images: swipeImages })}
      </SwipeCarousel>
      <NextButton handleClick={next}/>
      <CloseSwipeButton handleClick={close}/>
    </SwipeGalleryContainer>
  )
}

const renderImages = ({ images }) => {
  return images.map((image, index) => <Image key={index} image={image} />)
}

const SwipeGalleryContainer = styled.div`
  position: fixed;
  top: 0; right: 0; left: 0; bottom: 0;
  background-color: #24272EC8;
  z-index: 15;
  width: 100%;
  height: 100%;
`

const SwipeCarousel = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  width: 100%;
  width: calc(var(--n)*100%);
  transform: translate(calc(var(--i, 0)/var(--n)*-100%));
`

export default Swipe
