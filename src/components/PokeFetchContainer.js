import {React, useState, useEffect} from 'react';

function PokeFetchContainer() {
  const [pokeInfo, setPokeInfo] = useState (null)
  
  useEffect(() => {
    fetch('http://localhost:3001/api/2')
      .then((res) => res.json())
      .then((data) => 
      {console.log(data.datapoke)
      setPokeInfo(data.datapoke)})
      .catch((error) => error)
  }, [])

  return (
    <>
    {pokeInfo ? <img src={pokeInfo.sprites.front_default}/>: null}
    
    </>
    )
}

export default PokeFetchContainer;