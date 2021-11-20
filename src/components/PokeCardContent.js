import {Card, Button} from "react-bootstrap"
import {Link} from 'react-router-dom'
import Loader from "react-loader-spinner";

function PokeCard(props) {
  let pokeInfo= props.pokeInfo
  return (
    <>
        {pokeInfo? <Card.Img variant="top" src={pokeInfo.sprites.front_default} /> 
        : <Loader className="imgOnePoke" visible={true}  type="Puff" color="#00BFFF" height={80} width={80} />}
        <Card.Body>
            {pokeInfo ? <Card.Title>{pokeInfo.name}</Card.Title> : <Card.Title>Poke name</Card.Title>}
            {pokeInfo ? <Card.Text>Peso: {pokeInfo.weight}</Card.Text> : <Card.Text>Weight: loading</Card.Text>}
            <Card.Text> Tipo: 
            {pokeInfo ? pokeInfo.types.map(type => ` ${type.type.name} | `,  ) : "loading"} 
            </Card.Text>
            <Card.Text> Habilidades: 
            {pokeInfo ? pokeInfo.abilities.map(ability => ` ${ability.ability.name} | `,  ) : "loading"} 
            </Card.Text>
            {pokeInfo ? <Link to={`/one/${pokeInfo.id}`}><Button variant="primary">Mas info</Button></Link> : <Button variant="primary">Mas info</Button>} 
        </Card.Body>
    </>
    )
}

export default PokeCard;