import { useState } from "react";
import "./demo.css";
import mockupdemo from "../../assets/mockup-demo.svg";

function Demo() {
  const [ativo, setAtivo] = useState(0);

  const ConteudoDemo = [
    {
      h4: "Visão completa na tela inicial",
      p1: "Painel geral finaceiro (total de divídas, entradas, valores pagos e pendentes)",
      p2: "Atalhos rápidos para ações principais (adicionar despesa, entrada ou cartão)",
      p3: "Lista de despesas organizadas  por data de pagamento",
      telaMockup: mockupdemo
    },
    {
      h4: "exemplo 2",
      p1: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, doloremque.",
      p2: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, doloremque.",
      p3: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, doloremque.",
      telaMockup: mockupdemo
    },
    {
      h4: "exemplo 3",
      p1: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, doloremque.",
      p2: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, doloremque.",
      p3: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, doloremque.",
      telaMockup: mockupdemo
    },
    {
      h4: "exemplo 4",
      p1: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, doloremque.",
      p2: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, doloremque.",
      p3: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, doloremque.",
      telaMockup: mockupdemo
    },
    {
      h4: "exemplo 5",
      p1: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, doloremque.",
      p2: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, doloremque.",
      p3: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, doloremque.",
      telaMockup: mockupdemo
    },
  ];

  return (
    <section className="demo">
      <button className="btn btn-primary d-none d-md-flex">
        Veja mais <i className="bi bi-arrow-down"></i>
      </button>

      <ul className="lista-btn d-flex justify-content-center list-unstyled">
        {["Home", "Despesas", "Entradas", "Gerenciamento", "Cartões"].map(
          (item, index) => (
            <li className="btn-slide" key={index}>
              <button
                className={`btn-demo ${ativo === index ? "active" : ""}`}
                onClick={() => setAtivo(index)}
              >
                {item}
              </button>
            </li>
          ),
        )}
      </ul>

      <div className="mockup-demo">
        <img src={ConteudoDemo[ativo].telaMockup} alt="Mockup demo" />
      </div>

      <div className="textos-demo d-flex flex-column align-items-center gap-3">
        <h4 className="tt-demo">{ConteudoDemo[ativo].h4}</h4>

        <p className="p-demo">
          <i className="icone-check bi bi-check-circle-fill"></i>
          {ConteudoDemo[ativo].p1}
        </p>

        <p className="p-demo">
          <i className="icone-check bi bi-check-circle-fill"></i>
          {ConteudoDemo[ativo].p2}
        </p>

        <p className="p-demo">
          <i className="icone-check bi bi-check-circle-fill"></i>
          {ConteudoDemo[ativo].p3}
        </p>
      </div>
    </section>
  );
}

export default Demo;
