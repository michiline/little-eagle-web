import React, { memo } from 'react'
import styled from 'styled-components'

// export const Hamburger = {
//   mobile: memo(({ width, height}) => {
//     return (
//       <svg width="35" height="22" viewBox="0 0 35 22" fill="none" xmlns="http://www.w3.org/2000/svg">
//         <line x1="1.48649" y1="1.48666" x2="33.5135" y2="1.48666" stroke="#FFD8C1" stroke-width="2.97297" stroke-linecap="round" stroke-linejoin="round"/>
//         <line x1="4.98649" y1="10.9998" x2="29.2357" y2="10.9998" stroke="#FFD8C1" stroke-width="2.97297" stroke-linecap="round" stroke-linejoin="round"/>
//         <line x1="1.48649" y1="20.5135" x2="33.5135" y2="20.5135" stroke="#FFD8C1" stroke-width="2.97297" stroke-linecap="round" stroke-linejoin="round"/>
//       </svg>
//     )
//   }),
//   web: memo(() => {
//     return (
//       <svg width='60' height='37' viewBox='0 0 60 37' fill='none' xmlns='http://www.w3.org/2000/svg'>
//         <line x1='2.5' y1='2.5' x2='57.5' y2='2.50001' stroke='#FFD8C1' strokeWidth='5' strokeLinecap='round' strokeLinejoin='round'/>
//         <line x1='8.5' y1='18.5' x2='50.1667' y2='18.5' stroke='#FFD8C1' strokeWidth='5' strokeLinecap='round' strokeLinejoin='round'/>
//         <line x1='2.5' y1='34.5' x2='57.5' y2='34.5' stroke='#FFD8C1' strokeWidth='5' strokeLinecap='round' strokeLinejoin='round'/>
//       </svg>
//     )
//   })
// }


const HamburgerSvg = styled.svg`
  width: 60px;
  height: 37px;
  @media only screen and (max-width: 1024px) {
    width: 35px;
    height: 22px;
  }
`

export const HamburgerIcon = () => {
  return (
    <HamburgerSvg viewBox='0 0 60 37' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <line x1='2.5' y1='2.5' x2='57.5' y2='2.50001' stroke='#FFD8C1' strokeWidth='5' strokeLinecap='round' strokeLinejoin='round'/>
      <line x1='8.5' y1='18.5' x2='50.1667' y2='18.5' stroke='#FFD8C1' strokeWidth='5' strokeLinecap='round' strokeLinejoin='round'/>
      <line x1='2.5' y1='34.5' x2='57.5' y2='34.5' stroke='#FFD8C1' strokeWidth='5' strokeLinecap='round' strokeLinejoin='round'/>
    </HamburgerSvg>
  )
}