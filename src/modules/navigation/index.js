import React, { useState } from 'react'
import Navbar from './Navbar'

const Navigation = () => {
  const [toggleNav, setToggleNav] = useState(false)
  return (
    <>
      <Navbar onMenuClick={() => setToggleNav(true)}/>
    </>
  )
}

export default Navigation
