import "./sobre.css";
import mulherdemo from "../../assets/mulher-demo.png";

function Sobre() {
  return (
    <section
      id="sobre"
      className="sobre container d-flex flex-column flex-md-row justify-content-center justify-content-md-around align-items-center"
    >
      <article className="txt-sobre d-flex flex-column align-items-center align-items-md-start justify-content-center">
        <div className="msg-red d-flex align-items-center justify-content-center">
          <i class="bi bi-exclamation-circle-fill"></i>
          <h6 className="txt-red">NÃO PERCA O CONTROLE DO SEU DINHEIRO</h6>
        </div>
        <h2 className="tt-sobre text-center text-md-start">
          ASSUMA O COMANDO DAS SUAS FINANÇAS
        </h2>
        <p className="p-sobre">
            Manter a vida financeira sob controle não deveria ser complicado —
          mas, na prática, é. São contas espalhadas, cartões acumulando faturas
          e gastos que passam despercebidos, criando a sensação de não saber
          exatamente para onde o dinheiro está indo. Este aplicativo foi criado
          para mudar isso. Em um só lugar, você visualiza seu saldo, organiza
          despesas, acompanha seus cartões e entende com clareza cada movimento
          do seu dinheiro. 
            Mais do que registrar números, ele te dá consciência.
          Você passa a enxergar padrões, identificar excessos e tomar decisões
          com mais segurança. Com uma interface simples e pensada para o dia a
          dia, tudo funciona de forma rápida e natural — porque no fim, não se
          trata apenas de organizar finanças, mas de ter controle e viver com
          mais tranquilidade.
        </p>
      </article>

      <article className="mulher-demo">
        <img src={mulherdemo} className="img-mulher" />
      </article>
    </section>
  );
}

export default Sobre;
