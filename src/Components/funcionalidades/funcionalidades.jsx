import "./funcionalidades.css";
import bg from "../../assets/logoTrace.svg";

function Funcionalidades() {
  const itens = [
    {
      icone: "bi bi-calendar-week-fill",
      titulo: "Planejamento mensal",
      descricao:
        "Acompanhe seu mês atual, revise meses anteriores e visualize seus próximos gastos.",
    },
    {
      icone: "bi bi-bar-chart-line-fill",
      titulo: "Visão geral financeira",
      descricao:
        "Veja rapidamente quanto você ganha, quanto deve, o que já pagou e o que ainda falta.",
    },
    {
      icone: "bi bi-credit-card-fill",
      titulo: "Controle de cartões",
      descricao:
        "Gerencie todos os seus cartões, acompanhe faturas e registre compras sem complicação.",
    },
    {
      icone: "bi bi-archive-fill",
      titulo: "Organização de despesas",
      descricao:
        "Crie categorias personalizadas para organizar suas dívidas do seu jeito.",
    },
    {
      icone: "bi bi-piggy-bank-fill",
      titulo: "Registro de entradas",
      descricao:
        "Acompanhe todo seu dinheiro que entra e tenha certeza sobre sua renda.",
    },
    {
      icone: "bi bi-bell-fill",
      titulo: "Lembretes de pagamento",
      descricao: "Receba notificações para não esquecer contas e evitar juros.",
    },
  ];

  return (
    <section id="funcionalidades" className="funcionalidades container d-flex flex-column align-items-center">
      <h4 className="tt-functions">FUNCIONALIDADES PRINCIPAIS</h4>
      <article
        className="container-card row row-cols-2"
        style={{ backgroundImage: `url(${bg})` }}
      >
        {itens.map((item, index) => (
          <div className="w-100 p-0 d-flex" key={index}>
            <div className="card d-flex flex-md-row align-items-md-center ">
              <i className={`icone-fuctions ${item.icone}`}></i>
              <div className="conteudo-card">
                <h4 className="tt-card">{item.titulo}</h4>
                <p className="p-card">{item.descricao}</p>
              </div>
            </div>
          </div>
        ))}
      </article>
    </section>
  );
}

export default Funcionalidades;
