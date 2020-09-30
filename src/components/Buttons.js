import React, { memo } from 'react'
import styled, { css } from 'styled-components'
import { HamburgerIcon, CloseIcon, FacebookLightIcon, FacebookDarkIcon, InstagramLightIcon, InstagramDarkIcon, PreviousIcon, NextIcon, CloseSwipeIcon } from './Icons'

export const HamburgerButton = memo(({ onClick }) => {
  return (
    <IconButton onClick={onClick}>
      <HamburgerIcon />
    </IconButton>
  )
})

export const CloseButton = memo(({ onClick }) => {
  return (
    <IconButton onClick={onClick}>
      <CloseIcon />
    </IconButton>
  )
})

export const FacebookLightButton = memo(({ onClick }) => {
  return (
    <IconButton onClick={onClick}>
      <FacebookLightIcon />
    </IconButton>
  )
})

export const FacebookDarkButton = memo(({ onClick }) => {
  return (
    <IconButton onClick={onClick}>
      <FacebookDarkIcon />
    </IconButton>
  )
})

export const InstagramLightButton = memo(({ onClick }) => {
  return (
    <IconButton onClick={onClick}>
      <InstagramLightIcon />
    </IconButton>
  )
})

export const InstagramDarkButton = memo(({ onClick }) => {
  return (
    <IconButton onClick={onClick}>
      <InstagramDarkIcon />
    </IconButton>
  )
})

export const PreviousButton = memo(({ handleClick, hide }) => {
  return (
    <PreviousButtonContainer onClick={handleClick} hide={hide}>
      <PreviousIcon />
    </PreviousButtonContainer>
  )
})

export const NextButton = memo(({ handleClick, hide }) => {
  return (
    <NextButtonContainer onClick={handleClick} hide={hide}>
      <NextIcon />
    </NextButtonContainer>
  )
})

export const CloseSwipeButton = memo(({ handleClick }) => {
  return (
    <CloseSwipeButtonContainer onClick={handleClick}>
      <CloseSwipeIcon />
    </CloseSwipeButtonContainer>
  )
})

export const IconButton = styled.button`
  border: none;
  cursor: pointer;
  background-color: transparent;
  &:active {
    transform: translateY(2px);
  }
`


export const PreviousButtonContainer = styled.div`
  position: absolute;
  bottom: calc(50% - 25px);
  left: 2%;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  cursor: pointer;
  user-select: none;
  z-index: 8;
  opacity: 0.6;
  transition: opacity 0.2s ease-in-out;
  &:hover {
    opacity: 1;
  }
  &:active {
    transform: translateY(2px);
  }
  display: flex;
  align-items: center;
  justify-content: center;
  ${props => props.hide && css`
    display: none;
  `}
`

const NextButtonContainer = styled.div`
  position: absolute;
  bottom: calc(50% - 25px);
  right: 2%;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  cursor: pointer;
  user-select: none;
  z-index: 8;
  opacity: 0.6;
  transition: opacity 0.2s ease-in-out;
  &:hover {
    opacity: 1;
  }
  &:active {
    transform: translateY(2px);
  }
  display: flex;
  align-items: center;
  justify-content: center;
  ${props => props.hide && css`
    display: none;
  `}
`

const CloseSwipeButtonContainer = styled.div`
  position: absolute;
  top: 2%;
  right: 2%;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  cursor: pointer;
  user-select: none;
  z-index: 8;
  opacity: 0.6;
  transition: all 0.2s ease-in-out;
  &:hover {
    opacity: 1;
  }
  &:active {
    transform: translateY(2px);
  }
  display: flex;
  align-items: center;
  justify-content: center;
`
