import "./sobre.css";
import mulherdemo from "../../assets/mulher-demo.png";

function Sobre() {
  return (
    <section id="sobre" className="sobre container d-flex flex-column flex-md-row justify-content-center justify-content-md-around align-items-center">
      <article className="txt-sobre d-flex flex-column align-items-center align-items-md-start justify-content-center">
        <div className="msg-red d-flex align-items-center justify-content-center">
          <i class="bi bi-exclamation-circle-fill"></i>
          <h6 className="txt-red">NÃO PERCA CONTROLE DO SEU DINHEIRO</h6>
        </div>
        <h2 className="tt-sobre text-center text-md-start">ASSUMA O COMANDO DA SUA FINANCEIRA</h2>
        <p className="p-sobre">Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus voluptatibus officia dignissimos tempora modi commodi doloremque quod iure eveniet error excepturi, repudiandae eum incidunt id facilis omnis, quo assumenda harum cumque, architecto vel laudantium. Corrupti illum suscipit fuga. Nihil molestias totam, recusandae excepturi cupiditate quidem ullam adipisci omnis. Placeat sapiente quia modi optio dolor illum cupiditate eligendi error ducimus ut ratione, voluptatum et debitis, consequuntur aliquam cumque blanditiis sed explicabo?</p>
      </article>

      <article className="mulher-demo">
        <img src={mulherdemo} className="img-mulher" />
      </article>
    </section>
  );
}

export default Sobre;
