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
  height: 64px;
  position: fixed;
  top: 0;
  display: flex;
  align-items: center;
  border-bottom: 1px solid rgba(0, 0, 0, 0.14);
  padding: 8px 10px 8px 0px;
  background-color: white;
  width: 100%;
  z-index: 5;
`

export default Navbar
