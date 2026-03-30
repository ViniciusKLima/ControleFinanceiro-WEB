import "./beneficios.css";


function Beneficios() {
  const semAppItens = [
    "Não sabe para onde o dinheiro está indo",
    "Se perde entre contas e cartões",
    "Esquece pagamentos e paga juros",
    "Falta de organização financeira",
    "Vive no improviso mês após mês",
    "Não consegue planejar o futuro",
    "Ansiedade ao pensar em dinheiro",
    "Não tem visão do que já pagou ou deve",
    "Usa planilhas e acaba abandonando",
    "Sensação de estar sempre atrasado",
  ];

  const comAppItens = [
    "Visão clara de toda sua vida financeira",
    "Controle organizado de contas e cartões",
    "Lembretes para nunca esquecer pagamentos",
    "Tudo estruturado em um só lugar",
    "Planejamento mensal eficiente",
    "Clareza sobre o presente e o futuro",
    "Mais tranquilidade e segurança",
    "Acompanhamento do que já foi pago e pendente",
    "Facilidade para registrar e organizar tudo",
    "Sensação de controle e organização",
  ];

  return (
    <section
      id="beneficios"
      className="beneficios container d-flex flex-column align-items-center justify-content-center"
    >
      <h1 className="tt-beneficios w-75 text-center">
        O IMPACTO DE ORGANIZAR SUA VIDA FINANCEIRA
      </h1>
      <div className="container-beneficios d-flex flex-column flex-lg-row justify-content-center align-items-center">
        <article className="card-beneficios card-semAPP d-flex flex-column align-items-center">
          <h3 className="tt-beneficio tt-semAPP">SEM O APLICATIVO</h3>
          <ul className="lista-beneficio p-semAPP">
            {semAppItens.map((item, index) => (
              <li key={index}>
                <i className="bi bi-x icone-item"></i>
                {item}
              </li>
            ))}
          </ul>
        </article>
        <i class="bi bi-x-lg vs"></i>
        <article className="card-beneficios card-comAPP d-flex flex-column align-items-center">
          <h3 className="tt-beneficio tt-comAPP">COM O APLICATIVO</h3>
          <ul className="lista-beneficio p-comAPP">
            {comAppItens.map((item, index) => (
              <li key={index}>
                <i className="bi bi-check-lg"></i>
                {item}
              </li>
            ))}
          </ul>
        </article>
      </div>
    </section>
  );
}

export default Beneficios;
