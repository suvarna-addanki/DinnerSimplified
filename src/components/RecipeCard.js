import React, { useEffect, useState } from 'react'
import { Button, Card, Modal } from 'react-bootstrap'
import ShowRecipe from './ShowRecipe';

function RecipeCard({recipe}) {
  const [show, setShow] = useState(false);
  const [details, setDetails] = useState([]);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  //const showrecipe = () => {<ShowRecipe />}

  useEffect(() => {
    fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${recipe.idMeal}`)
      .then((r) => r.json())
      .then((details) => setDetails(details.meals[0]));
  }, []);

  return (
    <>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={recipe.strMealThumb} />
      <Card.Body>
        <Card.Title>{recipe.strMeal}</Card.Title>
        <Button  onClick={handleShow} variant="success">Get Recipe</Button>
      </Card.Body>
    </Card>  

    <Modal show={show} onHide={handleClose}>
    <Modal.Header closeButton>
      <Modal.Title>{details.strMeal}</Modal.Title>
    </Modal.Header>
    <Modal.Body>
        <p>
          {details.strInstructions}
          {/* <Button  onClick={showrecipe} variant="success">Get Recipe</Button>
          {<ShowRecipe/>} */}
        </p>
      </Modal.Body>
 
  </Modal>
  </>
  )
}

export default RecipeCard