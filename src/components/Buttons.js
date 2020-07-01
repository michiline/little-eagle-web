import React, { memo } from 'react'
import styled, { css } from 'styled-components'
import { HamburgerIcon, CloseIcon } from './Icons'

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

export const IconButton = styled.button`
  border: none;
  cursor: pointer;
  background-color: transparent;
  &:active {
    transform: translateY(2px);
  }
`