import React from 'react'
import { Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function RecipeNav() {
  return (
    
    <Nav className="bg-success text-white "as="ul">
    <p className='text-black fw-bold navbar-brand pt-2 me-auto fs-3 fst-italic'>
      DinnerSimplified
    </p>
    <Link className='m-3 text-white fw-bold' to="/"  > Home</Link>
    <Link className='m-3 text-white fw-bold' to="/recipes"  >Recipes</Link>
    {/* <Link className='m-3 text-white fw-bold' to="/categories" >Categories</Link> */}
    <Link className='m-3 text-white fw-bold' to="/indian"  > Indian</Link>
    <Link className='m-3 text-white fw-bold' to="/chinese"  > Chinese</Link>
    <Link className='m-3 text-white fw-bold' to="/american"  >American</Link>
    
  </Nav>
  )
}

export default RecipeNav