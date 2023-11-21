import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';

function Login() {
  return (
    <Container>
      <Form className="mt-4">
        <Button href="/" variant="primary" type="submit" className='mb-4'>Voltar à página principal</Button>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
          <Form.Text className="text-muted">
            Nós nunca iremos compartilhar seu e-mail com ninguém!
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>

        <Button href="/" variant="primary" type="submit">Enviar</Button>
      </Form>
    </Container>
  );
}

export default Login;
