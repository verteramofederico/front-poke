import {Card, Button} from "react-bootstrap"

function PokeCard(props) {
  console.log(props.pokeInfo)
  let pokeInfo= props.pokeInfo
  return (
    <>
        {pokeInfo? <Card.Img variant="top" src={pokeInfo.sprites.front_default} /> : null}
        <Card.Body>
            {pokeInfo ? <Card.Title>{pokeInfo.name}</Card.Title> : <Card.Title>Poke name</Card.Title>}
            {pokeInfo ? <Card.Text>Weight: {pokeInfo.weight}</Card.Text> : <Card.Text>Weight: loading</Card.Text>}
            <Card.Text> Type: 
            {pokeInfo ? pokeInfo.types.map(type => ` ${type.type.name} | `,  ) : "loading"} 
            </Card.Text>
            <Card.Text> Abilities: 
            {pokeInfo ? pokeInfo.abilities.map(ability => ` ${ability.ability.name} | `,  ) : "loading"} 
            </Card.Text>
            <Button variant="primary">More info</Button>
        </Card.Body>
    </>
    )
}

export default PokeCard;