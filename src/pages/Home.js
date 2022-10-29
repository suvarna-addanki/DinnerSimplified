import React from 'react';
import { useNavigate } from 'react-router-dom';
import AboutUs from '../components/AboutUs';
import Footer from '../components/Footer';
import NavBar from '../components/NavBar';



function Home() {
  let navigate=useNavigate();
  return (
        <>
        <NavBar/>
        <div className='Home text-center'>
         <p className='text-center  fw-bold title'>
          Thinking about<br/> what to cook <br/> and how to <br/>cook it?
         </p> 
         <p className='text-center fs-3'>
            Worry no more we got you
         </p> 
        <button onClick={() => {navigate ('/recipes')} }  type="button" className="btn btn-success mt-3">Get Started</button> 
        </div>
         <AboutUs/>
         <Footer/>
        </>
  )
}

export default Home