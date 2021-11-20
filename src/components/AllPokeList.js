import {React, useState, useEffect} from 'react';
import Table from 'react-bootstrap/Table'
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom'

function AllPokeList() {
    const [pokeList, setPokeList] = useState (null) 
    
    useEffect(() => {
      fetch(`http://localhost:3001/api`)
      .then((res) => res.json())
      .then((data) => 
        setPokeList(data.datapoke))
      .catch((error) => error)
  }, [])
  return (
    <Container>
      <Table striped bordered hover size="sm">
        <thead>
            <tr>
            <th>#</th>
            <th>Name</th>
            </tr>
        </thead>
        {pokeList ? pokeList.results.map((poke, i) => 
               <tbody>
               <tr>
               <td>{i + 1}</td>
               <td>{poke.name}</td>
               <td><Link to={`/one/${i+1}`}><Button variant="primary">Mas info</Button></Link></td>
               </tr>
           </tbody>
          ): null}
      </Table>
    </Container>

    )
}

export default AllPokeList;