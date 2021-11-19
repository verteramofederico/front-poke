import PokeCard from './PokeCard'
import CardGroup from 'react-bootstrap/CardGroup'
import Container from 'react-bootstrap/Container'
import {React} from 'react';

function PokeContainer() {
  let pokeColumnNumber = 4 
  return (
    <>
    <Container style={{alignContent: 'center'}}>
    <CardGroup>
      {[...Array(pokeColumnNumber),].map((value, i) => (
      <PokeCard clave={i+1} key={i}/>
      ))}
    </CardGroup>
    </Container>
    </>
    )
}

export default PokeContainer;