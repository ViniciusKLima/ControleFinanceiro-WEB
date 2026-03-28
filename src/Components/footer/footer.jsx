import "./footer.css";
import logo from "../../assets/logoNome.svg";

function Footer() {
  return (
    <footer className="footer container d-flex flex-column align-items-center">
      <button
        className="btn btn-voltar-topo d-flex align-items-center"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        <span>VOLTAR PARA O TOPO</span>
        <i className="bi bi-arrow-up-short"></i>
      </button>
      <div className="container d-flex flex-column align-items-center">
        <div className="logo-footer">
          <img src={logo} alt="logo controle financeiro" />
        </div>
        <span className="d-flex flex-row align-items-center">
          <h4>DESENVOLVEDORES:</h4>
          <p>
            <i className="bi bi-link-45deg"></i>
            <a href="#">Vinícius K. Lima</a>
          </p>
          <p>
            <i className="bi bi-link-45deg"></i>
            <a href="#">Lucas R. Alves</a>
          </p>
        </span>
      </div>
      <p className="p-footer">
        Copyright &copy; 2026 - Todos os direitos reservados.
      </p>
    </footer>
  );
}

export default Footer;
