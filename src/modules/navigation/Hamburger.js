import React from 'react'
import styled, { css } from 'styled-components'
import { HamburgerButton } from '../../components'

const Hamburger = ({ showDrawer, setShowDrawer }) => {
	return (
		<RootContainer showDrawer={showDrawer} >
        	<HamburgerButton onClick={() => setShowDrawer(true)}/>
		</RootContainer>
	)
}

const RootContainer = styled.div`
	width: 100%;
	position: fixed;
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: flex-end;
	z-index: 10;
	top: 50px;
	right: 50px;
	opacity: 1;
	transition-property: opacity;
	transition-duration: 500ms;
	transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
	${props => props.showDrawer && css`
		opacity: 0;
		z-index: -1;
	`}
`

export default Hamburger

