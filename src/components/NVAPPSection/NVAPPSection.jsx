import  Row  from 'react-bootstrap/Row';
import  Button  from 'react-bootstrap/Button';
import  Col  from 'react-bootstrap/Col';
import Logo from "../../assets/logo-cortado-invisivel.png"
import "./NVAPPSection.scss"

export default function NVAPPSection() {

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
                <h1 style={{ color: '#3D3F42', fontWeight: "bold" }} className='titulo-section'>Conheça a equipe por trás disso!</h1>
                <p className='text-secondary my-4'>O NovaVita APP, e o Soul foram feitos com o paciente em mente, e tudo isso foi feito por duas pessoas!</p>
                <p className='text-secondary'>Aqui você pode conhecer os criadores e fundadores da NovaVita, do Soul e do NovaVitaAPP!</p>
                <div className="d-flex justify-content-between align-items-start w-50 mt-4">
                  <Button className='contact_btn' href='/aboutus'>Conhecer</Button>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </div>

  )


}