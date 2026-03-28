import "./contato.css";

function Contato() {
  const jasonSpan = [
    {
      icone: "bi bi-tools",
      texto: "Suporte técnico",
    },
    {
      icone: "bi bi-question-circle-fill",
      texto: "Dúvidas sobre o funcionamento do app",
    },
    {
      icone: "bi bi-lightbulb-fill",
      texto: "Sugestões de melhorias",
    },
    {
      icone: "bi bi-exclamation-triangle-fill",
      texto: "Relatar problemas ou erros",
    },
    {
      icone: "bi bi-chat-heart-fill",
      texto: "Feedback sobre a experiência",
    },
    {
      icone: "bi bi-code-slash",
      texto: "Parcerias ou colabolações",
    },
  ];

  return (
    <section
      id="contato"
      className="d-flex flex-column flex-md-row align-items-center justify-content-center"
    >
      <div className="texto-contato align-items-center d-flex flex-column">
        <h4 className="tt-contato">
          Conte com a gente para tirar dúvidas e mellhorar sua experiência!
        </h4>
        <div className="itens-contato">
          {jasonSpan.map((item, index) => (
            <p className="p-contato" key={index}>
              <i className={item.icone}></i>
              {item.texto}
            </p>
          ))}
        </div>
      </div>
      <div className="formulario-contato">
        <form
          action=""
          className="form-contato d-flex flex-column align-items-center justify-content-center gap-3"
        >
          <span className="tt-form d-flex  align-items-center">
            <i className="icone-mensagem bi bi-chat-dots-fill d-flex justify-content-center align-items-center"></i>
            <p className="p-span m-0">Envie uma mensagem!</p>
          </span>
          <input
            className=""
            type="text"
            placeholder="Nome Completo"
          />
          <input
            className="input-email"
            type="email"
            name="email"
            placeholder="Email"
          />
          <input
            className="input-assunto"
            type="text"
            name="assunto"
            placeholder="Assunto"
          />
          <textarea
            className="input-mensagem"
            name="mensagem"
            placeholder="Escreva uma mensagem aqui..."
          ></textarea>
          <button className="btn-contato d-flex align-items-center justify-content-center" type="submit">
            ENVIAR MENSAGEM <i className="bi bi-send-fill"></i>
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contato;
