import Card from 'react-bootstrap/Card'

function BodyWelcome() {
    return (
        <Card className="text-center">
        <Card.Header>PokeApi</Card.Header>
        <Card.Body>
          <Card.Title>Bringing all Poke information</Card.Title>
          <Card.Text>
            With help from PokeApi.v2 we bring you all about Pokemon
          </Card.Text>
        </Card.Body>
        <Card.Footer className="text-muted">by FV</Card.Footer>
      </Card>
    )
}

export default BodyWelcome;
