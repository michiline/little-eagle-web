import React, { memo } from 'react'
import styled from 'styled-components'

export const Icon = styled.svg.attrs(props =>
  ({
    viewBox: props.viewBox,
    width: props.width,
    height: props.height
  }))`
  display: block;
`

export const IconPath = styled.path.attrs(props =>
  ({
    d: props.d,
    fill: props.fill
  }))`
`

export const HamburgerIcon = memo(({ width, height}) => {
  return (
    <svg width={width} height={height} viewBox={`0 0 60 37`} fill='none' xmlns='http://www.w3.org/2000/svg'>
      <line x1='2.5' y1='2.5' x2='57.5' y2='2.50001' stroke='#FFD8C1' strokeWidth='5' strokeLinecap='round' strokeLinejoin='round'/>
      <line x1='8.5' y1='18.5' x2='50.1667' y2='18.5' stroke='#FFD8C1' strokeWidth='5' strokeLinecap='round' strokeLinejoin='round'/>
      <line x1='2.5' y1='34.5' x2='57.5' y2='34.5' stroke='#FFD8C1' strokeWidth='5' strokeLinecap='round' strokeLinejoin='round'/>
    </svg>
  )
})

export const ArrowDownIcon = memo(({ width, height}) => {
  return (
    <svg width={width} height={height} viewBox='0 0 79 34' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <path fill='#FFFBF6' fillRule='evenodd' clipRule='evenodd' d='M77.308 3.77456C78.3854 2.91107 78.3854 1.51109 77.308 0.647611C76.2307 -0.21587 74.4839 -0.21587 73.4065 0.647611L39.058 28.1765L4.70961 0.647611C3.63222 -0.21587 1.88543 -0.21587 0.808041 0.647611C-0.269347 1.51109 -0.269347 2.91107 0.808041 3.77456L36.3203 32.2361C36.4547 32.5142 36.662 32.7749 36.942 32.9993C38.0194 33.8628 39.7662 33.8628 40.8436 32.9993L77.308 3.77456Z'/>
    </svg>
  )
})

export const AddIcon = memo(() => {
  return (
    <Icon viewBox={'0 0 24 24'} width={'24px'} height={'24px'}>
      <IconPath d={'M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z'} fill={'#FFFFFF'}/>
      <IconPath d={'M0 0h24v24H0z'} fill={'none'}/>
    </Icon>
  )
})

export const MenuIcon = memo(() => {
  return (
    <Icon viewBox={'0 0 24 24'} width={'24px'} height={'24px'}>
      <IconPath d={'M0 0h24v24H0z'} fill={'none'}/>
      <IconPath d={'M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z'}/>
    </Icon>
  )
})

export const CloseIcon = memo(() => {
  return (
    <Icon viewBox={'0 0 24 24'} width={'24px'} height={'24px'}>
      <IconPath d={'M0 0h24v24H0z'} fill={'none'}/>
      <IconPath d={'M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z'}/>
    </Icon>
  )
})

export const SearchIcon = memo(() => {
  return (
    <Icon viewBox={'0 0 24 24'} width={'24px'} height={'24px'}>
      <IconPath d={'M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z'}/>
      <IconPath d={'M0 0h24v24H0z'} fill={'none'}/>
    </Icon>
  )
})

export const UpdateIcon = memo(() => {
  return (
    <Icon viewBox={'0 0 24 24'} width={'24px'} height={'24px'}>
      <IconPath d={'M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z'} fill={'#000000'}/>
      <IconPath d={'M0 0h24v24H0z'} fill={'none'}/>
    </Icon>
  )
})

export const DoneIcon = memo(() => {
  return (
    <Icon viewBox={'0 0 24 24'} width={'24px'} height={'24px'}>
      <IconPath d={'M0 0h24v24H0z'} fill={'none'}/>
      <IconPath d={'M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z'}/>
    </Icon>
  )
})

export const RemoveIcon = memo(() => {
  return (
    <Icon viewBox={'0 0 24 24'} width={'24px'} height={'24px'}>
      <IconPath d={'M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z'}/>
      <IconPath d={'M0 0h24v24H0z'} fill={'none'}/>
    </Icon>
  )
})

export const ArrowUpIcon = memo(() => {
  return (
    <Icon viewBox={'0 0 24 24'} width={'24px'} height={'24px'}>
      <IconPath d={'M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6z'}/>
      <IconPath d={'M0 0h24v24H0z'} fill={'none'}/>
    </Icon>
  )
})

export const TuneIcon = memo(() => {
  return (
    <Icon viewBox={'0 0 24 24'} width={'24px'} height={'24px'}>
      <IconPath d={'M3 17v2h6v-2H3zM3 5v2h10V5H3zm10 16v-2h8v-2h-8v-2h-2v6h2zM7 9v2H3v2h4v2h2V9H7zm14 4v-2H11v2h10zm-6-4h2V7h4V5h-4V3h-2v6z'}/>
      <IconPath d={'M0 0h24v24H0z'} fill={'none'}/>
    </Icon>
  )
})

export const MoreIcon = memo(() => {
  return (
    <Icon viewBox={'0 0 24 24'} width={'24px'} height={'24px'}>
      <IconPath d={'M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z'}/>
      <IconPath d={'M0 0h24v24H0z'} fill={'none'}/>
    </Icon>
  )
})

export const ArrowBackIcon = memo(() => {
  return (
    <Icon viewBox={'0 0 24 24'} width={'24px'} height={'24px'}>
      <IconPath d={'M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z'}/>
      <IconPath d={'M0 0h24v24H0z'} fill={'none'}/>
    </Icon>
  )
})

export const ArrowRightIcon = memo(() => {
  return (
    <Icon viewBox={'0 0 24 24'} width={'24px'} height={'24px'}>
      <IconPath d={'M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z'}/>
      <IconPath d={'M0 0h24v24H0z'} fill={'none'}/>
    </Icon>
  )
})

export const ArrowLeftIcon = memo(() => {
  return (
    <Icon viewBox={'0 0 24 24'} width={'24px'} height={'24px'}>
      <IconPath d={'M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z'}/>
      <IconPath d={'M0 0h24v24H0z'} fill={'none'}/>
    </Icon>
  )
})
