import { useState } from "react";
import "./demo.css";
import logoGradiente from "../../assets/logo-gradiente.png";
import mockupHome from "../../assets/mockups/mockupHome.png"
import mockupDespesas from "../../assets/mockups/mockupDespesas.png"
import mockupContas from "../../assets/mockups/mockup-Contas.png"
import mockupCartoes from "../../assets/mockups/mockup-Cartoes.png"
import mockupCategorias from "../../assets/mockups/mockup-Categorias.png"

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
      telaMockup: mockupHome,
    },
    {
      h4: "Tela de Acompanhamento de Despesas",
      paragraphs: [
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, doloremque.",
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, doloremque.",
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, doloremque.",
      ],
      telaMockup: mockupDespesas,
    },
    {
      h4: "Tela de Contas Bancárias",
      paragraphs: [
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, doloremque.",
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, doloremque.",
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, doloremque.",
      ],
      telaMockup: mockupContas,
    },
    {
      h4: "Tela de Cartões e Faturas",
      paragraphs: [
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, doloremque.",
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, doloremque.",
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, doloremque.",
      ],
      telaMockup: mockupCartoes,
    },
    {
      h4: "Tela de Categorias de Despesas",
      paragraphs: [
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, doloremque.",
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, doloremque.",
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, doloremque.",
      ],
      telaMockup: mockupCategorias,
    },
  ];

  return (
    <div className="bg-logo">
      <section
        className="demo d-flex flex-column justify-content-center align-items-center"
        style={{ backgroundImage: `url(${logoGradiente})` }}
      >
        <ul className="lista-btn d-flex justify-content-between list-unstyled">
          {["Home", "Despesas", "Entradas", "Cartões", "Categorias"].map(
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
