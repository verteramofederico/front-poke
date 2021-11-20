import PokeCard from './PokeCard'
import CardGroup from 'react-bootstrap/CardGroup'
import Container from 'react-bootstrap/Container'
import React from 'react';
import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom'
import './PokeContainer.css'

function PokeContainer() {
  
  // number of pokemon in column in large views
  let pokeColumnNumber = 4 

  // to get different id every render 
  function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }

  return (
    <>
    <Container style={{alignContent: 'center'}}>
    <CardGroup>
      {[...Array(pokeColumnNumber),].map((value, i) => (
      <PokeCard idPoke={getRandomInt(1,250)} key={i}/>
      ))}
    </CardGroup>
    <CardGroup>
      {[...Array(pokeColumnNumber),].map((value, i) => (
      <PokeCard idPoke={getRandomInt(251,500)} key={i}/>
      ))}
    </CardGroup>
    </Container>
    <Link className="navLink" to="/all"><Button className="mx-auto d-block buttonSeeAll" variant="success">Ver todos los Pokemon</Button></Link>
    
    </>
    )
}

export default PokeContainer;