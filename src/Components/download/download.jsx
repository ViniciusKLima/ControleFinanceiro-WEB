import "./download.css";
import bgLogo from "../../assets/bg-logo.svg"
import mockup from "../../assets/mockup.svg";
import play from "../../assets/btn-play.svg"
import apple from "../../assets/btn-apple.svg"
import web from "../../assets/btn-web.svg"

function Download() {
  return (
    <section
      id="download"
      className="download d-flex justify-content-center align-items-center"
    >
      <article className="container-download d-flex flex-column justify-content-center align-items-center" style={{ backgroundImage: `url(${bgLogo})` }}>
          <div className="text-download d-flex flex-column align-items-center align-items-md-start">
            <h4 className="tt-download text-center text-md-start">
              Comece a controlar seu dinheiro hoje mesmo
            </h4>
            <p className="p-download text-center text-md-start">Tudo o que você precisa para organizar sua finanças, em um só app.</p>
          </div>
          <div className="mockup-celular d-flex justify-content-center">
            <img className="img-mockup" src={mockup} />
          </div>
          <div className="links-download d-flex flex-wrap flex-lg-nowrap justify-content-center align-items-center justify-content-md-start">
            <div className="btn-download d-flex">
              <img src={play} alt="" className="btn-image btn-play" />
            </div>
            <div className="btn-download d-flex">
              <img src={apple} alt="" className="btn-image btn-apple" />
            </div>
            <div className="btn-download d-flex">
              <img src={web} alt="" className="btn-image btn-web" />
            </div>
          </div>
      </article>
    </section>
  );
}

export default Download;
