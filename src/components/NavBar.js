import React from 'react'
import { NavLink } from 'react-router-dom'

const link = {
  width: '100px',
  padding: '12px',
  color: 'blue'
}

const NavBar = () => {
  return (
    <div className='navbar'>
      <NavLink
        to='/'
        exact
        style={link}
        activeStyle={{
          fontWeight: 'bold',
          textDecoration: 'none',
          color: 'black'
        }}
      >Home</NavLink>
      <NavLink
        to='/movies'
        exact
        style={link}
        activeStyle={{
          fontWeight: 'bold',
          textDecoration: 'none',
          color: 'black'
        }}
      >Movies</NavLink>
      <NavLink
        to='/directors'
        exact
        style={link}
        activeStyle={{
          fontWeight: 'bold',
          textDecoration: 'none',
          color: 'black'
        }}
      >Directors</NavLink>
      <NavLink
        to='/actors'
        exact
        style={link}
        activeStyle={{
          fontWeight: 'bold',
          textDecoration: 'none',
          color: 'black'
        }}
        >Actors</NavLink>
    </div>
  )
}

export default NavBar
