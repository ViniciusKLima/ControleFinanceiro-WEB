import "./contato.css";

function Contato() {
  const jasonSpan = [
    {
      icone: "#",
      texto: "Conte com a gente para tirar dúvidas e mellhorar sua experiência",
    },
    {
      icone: "#",
      texto: "Dúvidas sobre o funcionamento do app",
    },
    {
      icone: "#",
      texto: "Sugestões de melhorias",
    },
    {
      icone: "#",
      texto: "Relatar problemas ou erros",
    },
    {
      icone: "#",
      texto: "Feedback sobre a experiência",
    },
    {
      icone: "#",
      texto: "Parcerias ou colabolações",
    },
  ];

  return (
    <section
      id="contato"
      className="d-flex flex-column align-items-center justify-content-center gap-5"
    >
      <div className="textos-contato align-items-center d-flex flex-column gap-3">
        <h4 className="tt-contato text-center">
          Conte com a gente para tirar dúvidas e mellhorar sua experiência
        </h4>
        <div className="itens-contato">
          {jasonSpan.map((item, index) => (
            <div className="item-contato" key={index}>
              <p className="p-contato">
                <i className={`bi bi-check-lg icone-contato`}></i>
                {item.texto}
              </p>
            </div>
          ))}
        </div>
      </div>
      <div className="formulario-contato">
        <form
          action=""
          className="form-contato d-flex flex-column align-items-center justify-content-center gap-3"
        >
          <span className="d-flex tt-form gap-2">
            <i className="icone-mensagem bi bi-chat-dots-fill"></i>
            <p className="p-span">Envie uma mensagem!</p>
          </span>
          <input className="input-nome" type="text" placeholder="Nome Completo" />
          <input className="input-email" type="email" name="email" placeholder="Email" />
          <input className="input-assunto" type="text" name="assunto" placeholder="Assunto" />
          <textarea className="input-mensagem"
            name="mensagem"
            placeholder="Escreva uma mensagem aqui..."
          ></textarea>
          <button className="btn btn-contato" type="submit">
            <p>ENVIAR MENSAGEM</p> <i className="bi bi-send-fill"></i>
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contato;
