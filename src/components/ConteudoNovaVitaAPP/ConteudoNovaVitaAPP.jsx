import  Row  from 'react-bootstrap/Row';
import  Container from 'react-bootstrap/Container';
import  Col  from 'react-bootstrap/Col';
import APP1 from '../../assets/1.png'
import Lembretes from '../../assets/9.png'
import Historico from "../../assets/10.png"
import Agendamentos from '../../assets/12.png'
import MonitoramentoSoul from '../../assets/13.png'
import Config from '../../assets/14.png'
import Notificacoes from '../../assets/15.png'
import NVAPPSection from '../NVAPPSection/NVAPPSection';
import "./ConteudoNovaVitaAPP.scss"

export default function ConteudoNovaVitaAPP() {

    return(
        <div className='mt-5'>
            <Container>
                <Row>
                    <Col md={6}>
                        <div className="parte-direita">
                            <div className="imageContainer d-flex justify-content-center align-items-center shadow-sm rounded">
                                <img src={APP1} alt="Soul-imagem" className='Img-direita' />
                            </div>
                        </div>
                    </Col>
                    <Col md={6}>
                        <div className="parte-esquerda">
                            <span className='h_subTitle'>Saúde e Praticidade</span>
                            <div className="w-100 mt-5 h_title">
                                <h1 style={{ color: '#03658C' }} className='titulos'>NovaVitaAPP</h1>
                                <h1 style={{ color: '#3D3F42' }} className='titulos'>Aplicativo</h1>
                                <h1 style={{ color: '#3D3F42' }} className='titulos'>De Saúde e Monitoramento</h1>
                            </div>
                            <p className='text-secondary'>
                                Carregue com você um APP que agiliza e automatiza sua saúde, que cuida de você todos os dias, te lembra de continuar seu tratamento e automaticamente remarca suas consultas.
                            </p>
                        </div>
                    </Col>
                </Row>


                <Row>
                <Col md={4}>
                    <div className="box">
                    <div className="boxContianer d-flex">
                        <div className="">
                        <img src={Historico} alt="Tela de historico" className='' style={{ width: '90%', objectFit: 'cover' }} />
                        </div>
                        <div className="w-100">
                        <h5 style={{ color: '#3D3F42', fontWeight: 'bold' }} className='titulos-secundarios'>Histórico Médico</h5>
                        <p className='text-secondary'>Seja capaz ver seu histórico médico completo, veja seus diagnosticos antigos, exames, laudos medicos e muito mais!</p>
                        </div>
                    </div>
                    </div>
                </Col>
                <Col md={4}>
                    <div className="box">
                    <div className="boxContianer d-flex">
                        <div className="">
                        <img src={Agendamentos} alt="coock" className='' style={{ width: '90%', objectFit: 'cover' }} />
                        </div>
                        <div className="w-100">
                        <h5 style={{ color: '#3D3F42', fontWeight: 'bold' }} className='titulos-secundarios'>Agendamentos</h5>
                        <p className='text-secondary'>No app, você pode marcar consultas, ver suas ultimas consultas, além dele remarcar suas consultas caso necessário!</p>
                        </div>
                    </div>
                    </div>
                </Col>
                <Col md={4}>
                    <div className="box">
                    <div className="boxContianer d-flex">
                        <div className="">
                        <img src={Lembretes} alt="coock" className='' style={{ width: '90%', objectFit: 'cover' }} />
                        </div>
                        <div className="w-100">
                        <h5 style={{ color: '#3D3F42', fontWeight: 'bold' }} className='titulos-secundarios'>Lembretes</h5>
                        <p className='text-secondary'>O NovaVitaApp também te lembra de quando tomar remedios, você ou o médico, coloca um prazo e de quantas e quantas horas, e ele te avisa automaticamente!</p>
                        </div>
                    </div>
                    </div>
                </Col>
                </Row>
                <Row className='row2'>

                <Col md={4}>
                    <div className="box">
                    <div className="boxContianer d-flex">
                        <div className="">
                        <img src={MonitoramentoSoul} alt="coock" className='' style={{ width: '90%', objectFit: 'cover' }} />
                        </div>
                        <div className="w-100">
                        <h5 style={{ color: '#3D3F42', fontWeight: 'bold' }} className='titulos-secundarios'>Integração com o Soul</h5>
                        <p className='text-secondary'>O app é por onde você pode ver a integração com o Soul, nele você monitora todos os sensores do Soul e é pelo app que o Soul te avisa caso algo saia do comum, podendo também auto agendar consultas.</p>
                        </div>
                    </div>
                    </div>
                </Col>
                <Col md={4}>
                    <div className="box">
                    <div className="boxContianer d-flex">
                        <div className="">
                        <img src={Notificacoes} alt="coock" className='' style={{ width: '90%', objectFit: 'cover' }} />
                        </div>
                        <div className="w-100">
                        <h5 style={{ color: '#3D3F42', fontWeight: 'bold' }} className='titulos-secundarios'>Notificações</h5>
                        <p className='text-secondary'>É pelo app onde o Soul irá te notificar caso algo fora do comum ocorra, ele também ficará marcado no historico quando isso aconteceu, e caso ele marque alguma consulta, ficará registrado quando isso ocorreu! O app também usa esta aba para te lembrar de continuar seu tratamento!</p>
                        </div>
                    </div>
                    </div>
                </Col>
                <Col md={4}>
                    <div className="box">
                    <div className="boxContianer d-flex">
                        <div className="">
                        <img src={Config} alt="coock" className='' style={{ width: '90%', objectFit: 'cover' }} />
                        </div>
                        <div className="w-100">
                        <h5 style={{ color: '#3D3F42', fontWeight: 'bold' }} className='titulos-secundarios'>Configurações</h5>
                        <p className='text-secondary'>Nesta parte você vai poder costumizar seu perfil, adicionar ou remover informações, controlar o volume das notificações e muito mais!</p>
                        </div>
                    </div>
                    </div>
                </Col>
                </Row>
                <div className="headerFoot my-4">
                    <NVAPPSection/>
                </div>
            </Container>
        </div>

  )


}