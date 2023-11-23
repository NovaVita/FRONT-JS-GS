import  Row  from 'react-bootstrap/Row';
import  Container from 'react-bootstrap/Container';
import  Col  from 'react-bootstrap/Col';
import APP1 from '../../assets/1.png'
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
                        {/* <img src={coock} alt="coock" className='' style={{ width: '90%', height: '100%', objectFit: 'cover' }} /> */}
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
                        {/* <img src={delivery} alt="coock" className='' style={{ width: '90%', height: '100%', objectFit: 'cover' }} /> */}
                        </div>
                        <div className="w-100">
                        <h5 style={{ color: '#3D3F42', fontWeight: 'bold' }} className='titulos-secundarios'>Em Tempo Real</h5>
                        <p className='text-secondary'>Com sensores top de linha do mercado, o Soul é capaz de mostrar seus sinais vitais extremamente rapido!</p>
                        </div>
                    </div>
                    </div>
                </Col>
                <Col md={4}>
                    <div className="box">
                    <div className="boxContianer d-flex">
                        <div className="">
                        {/* <img src={thumbs} alt="coock" className='' style={{ width: '90%', height: '100%', objectFit: 'cover' }} /> */}
                        </div>
                        <div className="w-100">
                        <h5 style={{ color: '#3D3F42', fontWeight: 'bold' }} className='titulos-secundarios'>Praticidade</h5>
                        <p className='text-secondary'>O Soul também alerta automaticamente quando algum dos sensores captam valores fora do comum, e se continuar por um determinado período de tempo, ele já agenda uma consulta para você!</p>
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