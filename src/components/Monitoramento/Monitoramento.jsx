import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ReactApexChart from "react-apexcharts";

export default function Monitoramento() {
  const [dataT, setDataT] = useState([]);
  const [dataB, setDataB] = useState([]);
  const [dataI, setDataI] = useState([]);
  const [dataO, setDataO] = useState([]);

  const fetchData = (url, setData) => {
    fetch(url)
      .then((response) => response.json())
      .then((responseData) => {
        if (Array.isArray(responseData.contextResponses)) {
          const attributes =
            responseData.contextResponses[0].contextElement.attributes;
          if (Array.isArray(attributes) && attributes.length > 0) {
            const chartData = attributes[0].values.map((item) => ({
              x: new Date(item.recvTime).getTime(),
              y: item.attrValue,
            }));
            setData(chartData);
          } else {
            console.error(
              "A matriz de atributos está vazia ou não é uma matriz."
            );
          }
        } else {
          console.error(
            "A resposta da API não contém a matriz contextResponses."
          );
        }
      })
      .catch((error) => {
        console.error("Erro ao acessar a API: " + error);
      });
  };

  useEffect(() => {
    fetchData("http://localhost:3000/t", setDataT);
    fetchData("http://localhost:3000/b", setDataB);
    fetchData("http://localhost:3000/i", setDataI);
    fetchData("http://localhost:3000/o", setDataO);

    const interval = setInterval(() => {
      fetchData("http://localhost:3000/t", setDataT);
      fetchData("http://localhost:3000/b", setDataB);
      fetchData("http://localhost:3000/i", setDataI);
      fetchData("http://localhost:3000/o", setDataO);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  const chartOptions = {
    chart: {
      id: "basic-line-chart",
      toolbar: {
        show: true,
        tools: {
          zoom: true,
          pan: true,
          reset: true,
        },
      },
      zoom: {
        enabled: true,
      },
    },
    xaxis: {
      type: "datetime",
    },
    yaxis: {
      forceNiceScale: false,
      labels: {
        formatter: (value) => value.toFixed(2),
      },
    },
    stroke: {
      curve: "smooth",
    },
  };

  return (
    <div className="chart-container">
      <h1 className="titulo">Quadro de Gráficos</h1>

      <Link to="/">
        <button className="botaoVoltar">Home</button>
      </Link>

      <div className="top-row">
        <div className="chart">
          <div className="chart-label">Temperatura</div>
          <ReactApexChart
            options={chartOptions}
            series={[{ name: "Temperatura", data: dataT }]}
            type="line"
            height={350}
          />
        </div>
        <div className="chart">
          <div className="chart-label">Batimento</div>
          <ReactApexChart
            options={chartOptions}
            series={[{ name: "BPM", data: dataB }]}
            type="line"
            height={350}
          />
        </div>
      </div>

      <div className="bottom-row">
        <div className="chart">
          <div className="chart-label">Pressão</div>
          <ReactApexChart
            options={chartOptions}
            series={[{ name: "Pressão", data: dataI }]}
            type="line"
            height={350}
          />
        </div>
        <div className="chart">
          <div className="chart-label">Oxigênio</div>
          <ReactApexChart
            options={chartOptions}
            series={[{ name: "Oxigênio", data: dataO }]}
            type="line"
            height={350}
          />
        </div>
      </div>
    </div>
  );
}
