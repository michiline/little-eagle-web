import React, { memo } from 'react'
import styled, { css } from 'styled-components'
import { HamburgerIcon, CloseIcon, FacebookLightIcon, FacebookDarkIcon, InstagramLightIcon, InstagramDarkIcon } from './Icons'

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

export const IconButton = styled.button`
  border: none;
  cursor: pointer;
  background-color: transparent;
  &:active {
    transform: translateY(2px);
  }
`