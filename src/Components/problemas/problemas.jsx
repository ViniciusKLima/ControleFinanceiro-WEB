import "./problemas.css";

function Problemas() {
  return (
    <section
      id="problemas"
      className="problem container d-flex flex-column flex-md-row align-items-center"
    >
      <article className="problemaCard d-flex justify-content-center align-items-center text-center ">
        <i className="bi bi-question-lg"></i>
        <h3 className="txt-problema">
          Chega no fim do mês sem entender como gastou tanto?
        </h3>
      </article>
      <article className="problemaCard d-flex justify-content-center align-items-center text-center ">
        <i className="bi bi-percent"></i>
        <h3 className="txt-problema">
          Vive esquecendo contas e pagando juros desnecessários?
        </h3>
      </article>
      <article className="problemaCard d-flex justify-content-center align-items-center text-center ">
        <i className="bi bi-graph-down-arrow"></i>
        <h3 className="txt-problema">
          Não tem clareza se está melhorando ou piorando financeiramente?
        </h3>
      </article>
    </section>
  );
}

export default Problemas;
