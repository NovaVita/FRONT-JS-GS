import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";

function Erro404() {
  return (
    <Container>
      <Card className="my-4">
        <Card.Header>Erro404</Card.Header>
        <Card.Body>
          <Card.Title>Significado</Card.Title>
          <Card.Text>
            Um servidor não conseguiu encontrar a página da web solicitada pelo
            cliente.
          </Card.Text>
          <Button href="/" variant="primary">
            Voltar à página principal
          </Button>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default Erro404;
