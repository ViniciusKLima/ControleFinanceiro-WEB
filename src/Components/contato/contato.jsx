import "./contato.css";
import { useRef } from "react";

function Contato() {
  const inputNome = useRef(null);
  const inputEmail = useRef(null);
  const inputAssunto = useRef(null);
  const inputMensagem = useRef(null);
  const btnSubmit = useRef(null);

  const handleKeyDown = (e, nextRef) => {
    if (e.key === "Enter") {
      e.preventDefault();
      nextRef?.current?.focus();
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const nome = inputNome.current?.value.trim();
    const email = inputEmail.current?.value.trim();
    const assunto = inputAssunto.current?.value.trim();
    const mensagem = inputMensagem.current?.value.trim();

    if (!nome || !email || !assunto || !mensagem) {
      alert("Todos os campos são obrigatórios!");
      return;
    }

    // TODO: Implementar lógica de envio
    console.log({ nome, email, assunto, mensagem });
    alert("Mensagem enviada com sucesso!");

    // Limpar formulário
    inputNome.current.value = "";
    inputEmail.current.value = "";
    inputAssunto.current.value = "";
    inputMensagem.current.value = "";
    inputNome.current.focus();
  };

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
      <div className="texto-contato d-flex flex-column align-items-center align-items-md-start justify-content-center ">
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
          onSubmit={handleSubmit}
        >
          <span className="tt-form d-flex  align-items-center">
            <i className="icone-mensagem bi bi-chat-dots-fill d-flex justify-content-center align-items-center"></i>
            <p className="p-span m-0">Envie uma mensagem!</p>
          </span>
          <input
            ref={inputNome}
            className=""
            type="text"
            placeholder="Nome Completo"
            required
            onKeyDown={(e) => handleKeyDown(e, inputEmail)}
          />
          <input
            ref={inputEmail}
            className="input-email"
            type="email"
            name="email"
            placeholder="Email"
            required
            onKeyDown={(e) => handleKeyDown(e, inputAssunto)}
          />
          <input
            ref={inputAssunto}
            className="input-assunto"
            type="text"
            name="assunto"
            placeholder="Assunto"
            required
            onKeyDown={(e) => handleKeyDown(e, inputMensagem)}
          />
          <textarea
            ref={inputMensagem}
            className="input-mensagem"
            name="mensagem"
            placeholder="Escreva uma mensagem aqui..."
            required
            onKeyDown={(e) => {
              if (e.key === "Enter" && e.ctrlKey) {
                handleSubmit(e);
              }
            }}
          ></textarea>
          <button
            ref={btnSubmit}
            className="btn-contato d-flex align-items-center justify-content-center"
            type="submit"
          >
            ENVIAR MENSAGEM <i className="bi bi-send-fill"></i>
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contato;
