import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import RecipeCard from '../components/RecipeCard';
import RecipeNav from '../components/RecipeNav';

function Recipes() {
  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState('');
  const [food, SetFood] = useState([]);

  useEffect(() => {
    fetch("https://www.themealdb.com/api/json/v1/1/random.php")
      .then((r) => r.json())
      .then((recipes) => setRecipes(recipes.meals));
  }, []);

  useEffect(() => {
    fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${search}`)
      .then((r) => r.json())
      .then((food) => SetFood(food.meals));
  }, [search]);


   function handleSubmit(e) {
    e.preventDefault()
     console.log(food)
    return food
   
   }
  

  return (
    <>
    <RecipeNav/>
    <Container>
      <p className='fs-1 fw-italic text-center'>Our Recipes</p>
      <Row>
        <Col xs={12} md={4} >
          <form onSubmit={handleSubmit} className="ui large w-100 fluid icon input pt-5">
            <input className='form-control-lg'
              type="text"
              placeholder="Search main ingredient"
              onChange={(e)=>{setSearch(e.target.value)}}
            />
          </form>
        </Col>
      </Row>
      <Row>
        {food && food.map((recipe) => (
              <Col xs={12} md={4}className='p-5'>
              <RecipeCard recipe={recipe} key={recipe.id}/>
              </Col>
        ))}

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

export default Recipes