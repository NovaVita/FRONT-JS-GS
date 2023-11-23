import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";

import logo932x180 from "../../assets/logo932x280.png";
import fototomaz from "../../assets/foto-tomaz.jpeg";
import fotorony from "../../assets/foto-rony.png";
import "../../style/_variables.scss";

function Aboutus() {
  const h2Style = {
    color: "#368abf",
  };
  const liStyle = {
    color: "#03658C",
  };

  return (
    <Container>
      <div
        className="d-flex justify-content-center flex-wrap"
        style={{ marginBottom: "70px" }}
      >
        <Card className="my-4">
          <Card.Img variant="top" src={logo932x180} />
          <Card.Body>
            <Card.Text>
              <h2 style={h2Style}>
                <b>Quem somos?</b>
              </h2>
              <p>
                Bem-vindo à NovaVita, onde a inovação e a saúde se encontram
                para transformar a experiência do cuidado médico. Nossa missão é
                facilitar e aprimorar a qualidade de vida das pessoas por meio
                da inovação tecnológica. Comprometemo-nos a simplificar o acesso
                à saúde, promovendo tratamentos mais rápidos e eficazes,
                proporcionando bem-estar e alívio para aqueles que confiam em
                nossa solução.
              </p>

              <h2 style={h2Style}>
                <b>Missão:</b>
              </h2>
              <p>
                Facilitar e aprimorar a qualidade de vida das pessoas por meio
                da inovação tecnológica, oferecendo um aplicativo intuitivo e
                eficiente que otimiza os processos de agendamento médico e
                monitoramento de pacientes crônicos, e um dispositivo capaz de
                ler automaticamente os valores das doenças crônicas, como
                diabetes. Comprometemo-nos a simplificar o acesso à saúde,
                promovendo tratamentos mais rápidos e eficazes, proporcionando
                bem-estar e alívio para aqueles que confiam em nossa solução.
              </p>

              <h2 style={h2Style}>
                <b>Visão:</b>
              </h2>
              <p>
                Ser reconhecida como referência global na transformação digital
                da área da saúde, sendo a primeira escolha tanto para
                profissionais médicos quanto para pacientes. Almejamos criar um
                ecossistema onde a tecnologia seja aliada à humanização do
                cuidado, promovendo uma saúde mais acessível, eficiente e
                personalizada. Buscamos constantemente inovar e evoluir,
                contribuindo para uma sociedade mais saudável e conectada.
              </p>

              <h2 style={h2Style}>
                <b>Valores:</b>
              </h2>
              <ul>
                <li>
                  <b style={liStyle}>Inovação Pura:</b> Buscamos constantemente
                  soluções disruptivas, desafiando o status quo para oferecer o
                  que há de melhor em tecnologia para a saúde.
                </li>
                <li>
                  <b style={liStyle}>Integridade Inquestionável:</b>{" "}
                  Comprometemo-nos a agir com honestidade, transparência e ética
                  em todas as interações, mantendo a confiança depositada em nós
                  pelos usuários, parceiros e colaboradores.
                </li>
                <li>
                  <b style={liStyle}>Empatia Profunda:</b> Colocamos as
                  necessidades e experiências dos usuários no centro de tudo o
                  que fazemos, desenvolvendo soluções que verdadeiramente fazem
                  a diferença na vida das pessoas.
                </li>
                <li>
                  <b style={liStyle}>Responsabilidade Social:</b> Reconhecemos
                  nosso papel na promoção da saúde da sociedade e assumimos a
                  responsabilidade de contribuir para o bem-estar coletivo,
                  apoiando iniciativas sociais e ambientais.
                </li>
                <li>
                  <b style={liStyle}>Trabalho Colaborativo:</b> Valorizamos a
                  diversidade de ideias e experiências, promovendo um ambiente
                  de trabalho inclusivo e colaborativo, onde cada membro da
                  equipe é essencial para o sucesso da NovaVita.
                </li>
                <li>
                  <b style={liStyle}>Excelência Sustentável:</b> Buscamos a
                  excelência em tudo o que fazemos, desde a qualidade do nosso
                  aplicativo até o impacto positivo que geramos na comunidade.
                </li>
              </ul>

              <p>
                Comprometemo-nos a manter um equilíbrio sustentável entre o
                sucesso empresarial e o impacto social positivo.
              </p>
            </Card.Text>
          </Card.Body>
        </Card>
        <Card style={{ maxWidth: "18rem" }} className="my-2 mx-3">
          <Card.Img variant="top" src={fototomaz} />
          <Card.Body>
            <Card.Title>Tomáz</Card.Title>
            <Card.Text>
              Apaixonado por Engenharia de Software, sempre busco maneiras de
              evoluir. Adoro enfrentar desafios de cabeça erguida e estou
              comprometido em crescer não apenas como profissional, mas também
              como uma pessoa responsável e dedicada, pronto para contribuir
              positivamente em cada projeto que assumo!
            </Card.Text>
            <a
              href="https://www.linkedin.com/in/tomazcarballo/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="btn btn-primary">LinkedIn</button>
            </a>
          </Card.Body>
        </Card>
        <Card style={{ maxWidth: "18rem" }} className="my-2 mx-3">
          <Card.Img variant="top" src={fotorony} />
          <Card.Body>
            <Card.Title>Rony</Card.Title>
            <Card.Text>
              Sou fácil de lidar e adoro trabalhar em equipe. Comprometido com o
              que faço, sempre dou 100%. Aberto a críticas, adoro aprender e
              experimentar coisas novas. Valorizo o lado sério das coisas, mas
              também adoro uma boa conversa e explorar o desconhecido.
            </Card.Text>
            <a
              href="https://www.linkedin.com/in/rony-nagai/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="btn btn-primary">LinkedIn</button>
            </a>
          </Card.Body>
        </Card>
      </div>
    </Container>
  );
}

export default Aboutus;
