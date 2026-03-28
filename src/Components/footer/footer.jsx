import "./footer.css";
import logo from "../../assets/logoNome.svg";

function Footer() {
  return (
    <footer className="footer d-flex flex-column justify-content-center align-items-center">
      <div className="footer-topo d-flex justify-content-around align-items-center">
        <div className="logo-footer">
          <img className="img-logo" src={logo} />
        </div>
        <div className="box-btn d-flex justify-content-center">
          <button
            className="btn-voltar-topo d-flex justify-content-center align-items-center"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            VOLTAR AO TOPO
            <i className="bi bi-arrow-up-short"></i>
          </button>
        </div>
        <span className="devs d-flex flex-column">
          <h4>DESENVOLVEDORES:</h4>
          <p>
            <i className="bi bi-link-45deg"></i>
            <a href="https://viniciusklima-dev.vercel.app/">Vinícius K. Lima</a>
          </p>
          <p>
            <i className="bi bi-link-45deg"></i>
            <a href="#">Lucas R. Alves</a>
          </p>
        </span>
      </div>
      <p className="copy">
        Copyright &copy; 2026 - Todos os direitos reservados.
      </p>
    </footer>
  );
}

export default Footer;
