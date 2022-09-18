import React from 'react'
import { NavLink } from 'react-router-dom'
import NavLogo from '../Final_Logo.png'
import '../App.css'
const Navbar = () => {
  const colorblu = {
    color: '#0c62aa',
  }
 
  return (
    <>
      <nav class="navbar stroke navbar-expand-lg sticky-top text-black">
        <div class="container-fluid">
          <NavLink class="navbar-brand mx-2" to={'/'}>
          <img class="img-fluid h-15 w-25" src={NavLogo} alt="not found" style={{ borderRadius: "20px" }}/>
          </NavLink>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon text-black" style={colorblu}></span>
          </button>
          <div class="collapse navbar-collapse mr-auto" id="navbarNav">
            <ul class="navbar-nav ms-auto">
              <li class="nav-item mx-3 pb-2">
               <NavLink
                  class="nav-link active" style={colorblu}
                  aria-current="page"
                  to='/'>
                  Home
                </NavLink>
              </li>
              <li class="nav-item mx-3 pb-2">
                <NavLink class="nav-link " style={colorblu} to='Aboutus'>
                  About
                </NavLink>
              </li>
              <li class="nav-item mx-3 pb-2">
               <NavLink class="nav-link " style={colorblu} to='/'>
                  Activities
                </NavLink>
              </li>
              <li class="nav-item mx-3 pb-2">
               <NavLink class="nav-link" style={colorblu} to='/'>
                  Curriculum
                </NavLink>
              </li>
              <li class="nav-item mx-3 pb-2">
               <NavLink class="nav-link"  style={colorblu} to='/'>
                  Events
                </NavLink>
              </li>
              <li class="nav-item mx-3 pb-2">
               <NavLink class="nav-link" style={colorblu} to='/'>
                  Career
                </NavLink>
              </li>
              <li class="nav-item mx-3 pb-2">
               <NavLink class="nav-link" style={colorblu} to='/'>
                  Admission
                </NavLink>
              </li>
              <li class="nav-item mx-3 pb-2">
               <NavLink class="nav-link" style={colorblu} to='/'>
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}
export default Navbar