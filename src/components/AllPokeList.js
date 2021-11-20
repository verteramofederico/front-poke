import {React, useState, useEffect} from 'react';
import Table from 'react-bootstrap/Table'
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom'
import Loader from "react-loader-spinner"

const baseUrl = process.env.NODE_ENV === 'development'
    ? "http://localhost:3000"
    : "https://pokeappfv.herokuapp.com"
    
function AllPokeList() {
    const [pokeList, setPokeList] = useState (null)
    const [isLoading, setIsLoading] = useState(true) 
    
    useEffect(() => {
      fetch(`${baseUrl}/api`)
      .then((res) => res.json())
      .then((data) => 
        setPokeList(data.datapoke))
      .finally(setIsLoading(false))
      .catch((error) => error)
  }, [])
  return (
    <>
    <Container>
    {!pokeList ? <Loader className="imgOnePoke" visible={true}  type="Puff" color="#00BFFF" height={80} width={80} /> 
    : 
      <Table striped bordered hover size="sm">
        <thead>
            <tr>
            <th>#</th>
            <th>Name</th>
            </tr>
        </thead>
        {pokeList ? pokeList.results.map((poke, i) => 
            <tbody key={i}>
            <tr>
            <td>{i + 1}</td>
            <td>{poke.name}</td>
            <td><Link to={`/one/${i+1}`}><Button variant="primary">Mas info</Button></Link></td>
            </tr>
            </tbody>
          ): <tbody> <tr><td>Loading</td> <td><Loader visible={isLoading}  type="Puff" color="#00BFFF" height={10} width={10} /></td> </tr></tbody>}
      </Table>
    }
    </Container>
    </>
    )
}

export default AllPokeList;