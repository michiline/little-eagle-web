import React, { memo } from 'react'
import styled, { css } from 'styled-components'
import { HamburgerIcon } from './Icons'

export const HamburgerButton = memo(({ onClick }) => {
  return (
    <IconButton onClick={onClick}>
      <HamburgerIcon />
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
  padding: 10px;
`