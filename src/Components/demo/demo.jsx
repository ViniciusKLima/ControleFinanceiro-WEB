import { useState } from "react";
import "./demo.css";
import mockupSlide from "../../assets/mockup-slide.svg";

function Demo() {
  const [ativo, setAtivo] = useState(0);

  const ConteudoSlide = [
    {
      h4: "Visão completa na tela inicial",
      p1: "Painel geral finaceiro (total de divídas, entradas, valores pagos e pendentes)",
      p2: "Atalhos rápidos para ações principais (adicionar despesa, entrada ou cartão)",
      p3: "Lista de despesas organizadas  por data de pagamento",
      telaMockup: mockupSlide,
    },
  ];

  return (
    <section className="demo d-flex flex-column justify-content-center align-items-center">
      <ul className="lista-btn d-flex justify-content-between list-unstyled">
        {["Home", "Despesas", "Entradas", "Gerenciamento", "Cartões"].map(
          (item, index) => (
            <li className="btn-slide" key={index}>
              <button
                className={` ${ativo === index ? "active" : ""}`}
                onClick={() => setAtivo(index)}
              >
                {item}
              </button>
            </li>
          ),
        )}
      </ul>

      <div className="slides-container d-flex flex-column flex-lg-row align-items-center justify-content-center">
        {ConteudoSlide.map((item, index) => (
          <div
            className={`slide d-flex flex-column align-items-center ${ativo === index ? "active" : ""}`}
            key={index}
          >
            <div className="mockup-slide d-flex align-items-center justify-content-center">
              <img src={item.telaMockup} alt="Mockup slide" />
            </div>

            <div className="textos-slide d-flex flex-column align-items-start align-items-lg-start">
              <h4 className="tt-slide text-center text-lg-start">{item.h4}</h4>

              <p className="p-slide">
                <i className="icone-check bi bi-check-circle-fill"></i>
                {item.p1}
              </p>

              <p className="p-slide">
                <i className="icone-check bi bi-check-circle-fill"></i>
                {item.p2}
              </p>

              <p className="p-slide">
                <i className="icone-check bi bi-check-circle-fill"></i>
                {item.p3}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Demo;
