import {Nav, Navbar, Container} from "react-bootstrap"
import { Link } from 'react-router-dom'
import './Header-Welcome.css'

function Header() {
  return (
    <>
            <Navbar fixed="top" bg="light" expand="lg">
                <Container>
                <Navbar.Brand><Link className="navTitle" to="/">PokeApi</Link></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                    <Nav.Link><Link className="navLink" to="/all">Ver lista Pokemon</Link></Nav.Link>
                    <Nav.Link href="https://www.linkedin.com/in/federico-verteramo/" target="_blank">Desarrollado por FV</Nav.Link>                
                    </Nav>
                </Navbar.Collapse>               
                </Container>
            </Navbar> 
    </>
    )
}

export default Header;
