import "./Hero.css";

function Hero() {
  return (
    <section className="hero d-flex flex-collumn flex-md-row justify-content-center justify-content-md-between align-items-center">
      {/*Texto Principal do Hero*/}
      <div className="txt-hero">
        <h1 className="tt-hero">
          Organize sua vida financeira de forma simples e inteligente.
        </h1>
        <p className="p-hero">
          Acompanhe gastos, organize dívidas, gerencie cartões e planeje seu mês — tudo em um único app.
        </p>
        <button className="btn-download">
          Baixar <i class="bi bi-download"></i>
        </button>
      </div>
      {/*Imagem do Hero*/}
      <div className="img-hero d-flex justify-content-center align-items-end"><img src="/public/image.png" alt="" /></div>
    </section>
  );
}

export default Hero;
