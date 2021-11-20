import {Card} from "react-bootstrap"
import {React, useState, useEffect} from 'react';
import PokeCardContent from './PokeCardContent'

const baseUrl = process.env.NODE_ENV === 'development'
    ? "http://localhost:3000"
    : "https://pokeappfv.herokuapp.com"

function PokeCard(props) {
    const [pokeInfo, setPokeInfo] = useState (null) 
    let idToSearch = props.idPoke
  useEffect(() => {
      fetch(`${baseUrl}/api/${idToSearch}`)
      .then((res) => res.json())
      .then((data) => 
      setPokeInfo(data.datapoke))
      .catch((error) => error)
  }, [])
  return (
    <>
    <Card style={{ width: '18rem' }}>
        <PokeCardContent pokeInfo={pokeInfo}/>
    </Card>
    </>
    )
}

export default PokeCard;