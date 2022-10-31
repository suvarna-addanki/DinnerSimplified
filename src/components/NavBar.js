import React from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll';
import {Nav} from 'react-bootstrap';
import { Link } from 'react-router-dom';


const NavBar = () => {
  return (
    
    <Nav className="bg-primary text-white " defaultActiveKey="/" as="ul">
      <p className='text-black fw-bold navbar-brand pt-2 me-auto fs-3 fst-italic'>
        DinnerSimplified
      </p>
      <Link className='m-3 text-white fw-bold' to="/" > Home </Link>
      <AnchorLink className='m-3 text-white fw-bold' href='#about'> About us</AnchorLink>
      <Link className='m-3 text-white fw-bold' to="/recipes" >Our picks</Link>
      
    </Nav>
  )
}

export default NavBar