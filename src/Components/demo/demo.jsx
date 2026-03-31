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
      h4: "Visualize tudo organizado por data de pagamento",
      paragraphs: [
        "Tudo o que você precisa, em um só lugar",
        "Acompanhe seu saldo e despesas em tempo real",
        "Registre entradas, pagamentos e compras rapidamente",
        "Consulte suas últimas movimentações com facilidade",
      ],
      telaMockup: mockupHome,
    },
    {
      h4: "Organize e acompanhe todas as suas despesas",
      paragraphs: [
        "Acompanhe o que falta pagar e o que já foi quitado",
        "Separe por cartões, categorias ou pagamentos",
        "Marque despesas como pagas com apenas um toque",
        "Acompanhe o que falta pagar e o que já foi quitado",
      ],
      telaMockup: mockupDespesas,
    },
    {
      h4: "Todas as suas contas, em um só lugar",
      paragraphs: [
        "Adicione e visualize todas as suas contas em um só painel",
        "Acompanhe seu saldo total e individual com facilidade",
        "Registre entradas e pagamentos rapidamente",
        "Consulte seu extrato com movimentações",
      ],
      telaMockup: mockupContas,
    },
    {
      h4: "Gerencie seus cartões com total clareza",
      paragraphs: [
        "Visualize todos os seus cartões em um só lugar",
        "Acompanhe sua fatura atual em tempo real",
        "Registre compras com rapidez e organização",
        "Consulte faturas anteriores sempre que precisar",
      ],
      telaMockup: mockupCartoes,
    },
    {
      h4: "Agrupe suas despesas por categoria",
      paragraphs: [
        "Crie categorias personalizadas para seus gastos",
        "Organize despesas de forma simples e intuitiva",
        "Visualize tudo organizado por data de pagamento",
        "Tenha mais clareza para tomar decisões financeiras",
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
