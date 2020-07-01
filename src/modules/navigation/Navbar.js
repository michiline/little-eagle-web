import React from 'react'
import { useLocation } from 'react-router-dom'
import styled from 'styled-components'
import { HamburgerButton } from '../../components'

const Navbar = ({ toggleNav, onMenuClick }) => {
  return (
    <NavbarContainer>
      <HamburgerButton />
    </NavbarContainer>
  )
}

const NavbarContainer = styled.div`
  height: min-content;
  width: 100%;
`

export default Navbar
