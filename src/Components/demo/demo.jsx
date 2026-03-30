import { useState } from "react";
import "./demo.css";
import mockupSlide from "../../assets/mockup-slide.svg";
import logoGradiente from "../../assets/logo-gradiente.png";

function Demo() {
  const [ativo, setAtivo] = useState(0);

  const ConteudoSlide = [
    {
      h4: "Visão completa na tela inicial",
      paragraphs: [
        "Painel geral finaceiro (total de divídas, entradas, valores pagos e pendentes)",
        "Atalhos rápidos para ações principais (adicionar despesa, entrada ou cartão)",
        "Lista de despesas organizadas  por data de pagamento",
      ],
      telaMockup: mockupSlide,
    },
    {
      h4: "exemplo 2",
      paragraphs: [
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, doloremque.",
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, doloremque.",
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, doloremque.",
      ],
      telaMockup: mockupSlide,
    },
    {
      h4: "exemplo 3",
      paragraphs: [
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, doloremque.",
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, doloremque.",
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, doloremque.",
      ],
      telaMockup: mockupSlide,
    },
    {
      h4: "exemplo 4",
      paragraphs: [
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, doloremque.",
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, doloremque.",
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, doloremque.",
      ],
      telaMockup: mockupSlide,
    },
    {
      h4: "exemplo 5",
      paragraphs: [
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, doloremque.",
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, doloremque.",
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, doloremque.",
      ],
      telaMockup: mockupSlide,
    },
  ];

  return (
    <div className="bg-logo">
      <section
        className="demo d-flex flex-column justify-content-center align-items-center"
        style={{ backgroundImage: `url(${logoGradiente})` }}
      >
        <ul className="lista-btn d-flex justify-content-between list-unstyled">
          {["Home", "Despesas", "Entradas", "Gerenciamento", "Cartões"].map(
            (item, index) => (
              <li className="btn-slide d-flex align-items-center" key={index}>
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
        <div className="slides-container">
          <div
            className="slides-track d-flex"
            style={{
              transform: `translateX(calc(-100% * ${ativo}))`,
              transition: "transform 0.5s ease",
            }}
          >
            {ConteudoSlide.map((item, index) => (
              <div
                className={`slide d-flex flex-column flex-lg-row align-items-center justify-content-center`}
                key={index}
              >
                <div className="mockup-slide d-flex align-items-center justify-content-center">
                  <img src={item.telaMockup} alt="Mockup slide" />
                </div>
                <div className="textos-slide d-flex flex-column align-items-center align-items-lg-start">
                  <h4 className="tt-slide text-center text-lg-start">
                    {item.h4}
                  </h4>
                  <div className="paragrafos">
                    {item.paragraphs.map((paragraph, pIndex) => (
                      <p className="p-slide" key={pIndex}>
                        <i className="icone-check bi bi-check-circle-fill"> </i>
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Demo;
