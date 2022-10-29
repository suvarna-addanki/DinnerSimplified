import React, { useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import RecipeCard from '../components/RecipeCard'
import RecipeNav from '../components/RecipeNav'

function Chinese() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    fetch("https://www.themealdb.com/api/json/v1/1/filter.php?a=Chinese")
      .then((r) => r.json())
      .then((recipes) => setRecipes(recipes.meals));
  }, []);

  return (
    <>
    <RecipeNav/>
    <Container>
      <Row>
      <p className='fs-1 fw-italic text-center'>Chinese Meals</p>
          {recipes.map((recipe) => (
            <Col xs={12} md={4}className='p-5'>

            <RecipeCard recipe={recipe} key={recipe.id}/>
            </Col>
          ))}
       
      </Row>
    </Container>

    
    </>
  )
}

export default Chinese