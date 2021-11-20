import {Card} from "react-bootstrap"
import {React, useState, useEffect} from 'react';
import './PokeContainer.css'

function OnePokeContainer(props) {
    const [pokeInfo, setPokeInfo] = useState (null) 

    let idToSearch = props.match.params.id
    useEffect(() => {
      fetch(`http://localhost:3001/api/${idToSearch}`)
      .then((res) => res.json())
      .then((data) => 
      setPokeInfo(data.datapoke))
      .catch((error) => error)
  }, [idToSearch])

  console.log(pokeInfo)
  return (
    <>
    <Card className='OnePokeContainer' style={{ width: '18rem' }}>
        <Card.Body>
            {pokeInfo ? <Card.Title className="CardTitle">{pokeInfo.name}</Card.Title> : <Card.Title>Poke name</Card.Title>}
            {pokeInfo ? <Card.Text>Peso: {pokeInfo.weight}</Card.Text> : <Card.Text>Weight: loading</Card.Text>}
            <Card.Text> Tipo: 
            {pokeInfo ? pokeInfo.types.map(type => ` ${type.type.name} | `,  ) : "loading"} 
            </Card.Text>
            <Card.Text> Habilidades: 
            {pokeInfo ? pokeInfo.abilities.map(ability => ` ${ability.ability.name} | `,  ) : "loading"} 
            </Card.Text>
            <Card.Text> Movimientos: 
            {pokeInfo ? pokeInfo.moves.map(move => ` ${move.move.name} | `,  ) : "loading"} 
            </Card.Text>
        </Card.Body>
        {pokeInfo? <Card.Img className="imgOnePoke" variant="top" src={pokeInfo.sprites.front_default} /> : null}
    </Card>

    </>
    )
}

export default OnePokeContainer;