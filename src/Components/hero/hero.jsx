import "./hero.css";
import mulherHero from "../../assets/image.png";

function Hero() {
  function scrollToDownload() {
    const secao = document.getElementById("download");
    if (secao) {
      secao.scrollIntoView({ behavior: "smooth"});
    }
  }

  return(
    <section id="hero" className="hero d-flex flex-column flex-lg-row align-items-center justify-content-end justify-content-md-center">
      <article className="txt-hero d-flex flex-column justify-content-center align-items-center align-items-lg-start">
        <h1 className="tt-hero text-center text-lg-start">Organize sua vida financeira de forma simples e inteligente</h1>
        <p className="p-hero text-center text-lg-start">Acompanhe gastos, organize dívidas, gerencie cartões e planeje seu mês — tudo em um único app.</p>
        <button className="btn-download" onClick={scrollToDownload}>
          Baixar <i class="bi bi-download"></i>
        </button>
      </article>
      <article className="mulher-hero">
        <img src={mulherHero} className="img-mulher" />
      </article>
    </section>
  )
}

export default Hero;
