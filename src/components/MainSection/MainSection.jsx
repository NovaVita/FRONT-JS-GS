import  Row  from 'react-bootstrap/Row';
import  Col  from 'react-bootstrap/Col';
import  Button from 'react-bootstrap/Button';
import Logo from "../../assets/logo-cortado-invisivel.png"
import "./MainSection.scss"

export default function MainSection() {

    return(
        <div>
        <Row>
          <Col md={6}>
            <div className="h_footer">
              <div className="h_ftCona">
                <img src={Logo} alt="header-footer" className='img-fluid' />
              </div>
            </div>
          </Col>
          <Col md={6}>
            <div className="h_ftright">
              <div className="containerBox">
                <h1 style={{ color: '#3D3F42', fontWeight: "bold" }}>Conheça Nosso APP!</h1>
                <p className='text-secondary my-4'>O NovaVita APP, foi feito com o paciente em mente, é nele que você pode ver as informações dos sensores, </p>
                <p className='text-secondary'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste quibusdam sed aut sint voluptatem laudantium reiciendis cumque dolores culpa nobis? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus labore voluptatum dolores modi cupiditate quaerat optio quas dicta! Sequi, facere.</p>
                <div className="d-flex justify-content-between align-items-start w-50 mt-4">
                  <Button className='bg_login fw-bold border-0'>order food</Button>
                  <Button className='contact_btn'>contact us</Button>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </div>

  )


}