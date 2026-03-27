import "./problemas.css";

function Problemas() {
  return (
    <section className="problem d-flex justify-content-center justify-content-md-between align-items-center" id="problemas">
      {/*Texto Principal do Hero*/}
      <div className="txt-hero d-flex flex-column align-items-center align-items-md-start">
        <h1 className="tt-hero text-center text-md-start">
          Organize sua vida financeira de forma simples e inteligente.
        </h1>
        <p className="p-hero text-center text-md-start">
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

export default Problemas;
