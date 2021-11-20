import Card from 'react-bootstrap/Card'
import './Header-Welcome.css'

function BodyWelcome() {
    return (
      <>
        <h1 className="mainh1">PokeApi</h1>
        <Card className="text-center cardWelcome">
        <Card.Body >
          <Card.Title>Toda la informacion Pokemon</Card.Title>
          <Card.Text>
            Con ayuda de PokeApi.v2 traemos toda la informacion que busca
          </Card.Text>
        </Card.Body>
        <Card.Footer className="text-muted">by FV</Card.Footer>
      </Card>
      </>
    )
}

export default BodyWelcome;
