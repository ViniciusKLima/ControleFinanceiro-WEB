import "./App.css";
import Header from "./Components/header/header";
import Hero from "./Components/hero/hero";
import Problemas from "./Components/problemas/problemas";
import Sobre from "./Components/sobre/sobre";
import Funcionalidades from "./Components/funcionalidades/funcionalidades";
import Beneficios from "./Components/beneficios/beneficios";
import Download from "./Components/download/download";
import Contato from "./Components/contato/contato";
import Footer from "./Components/footer/footer";

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Problemas />
        <Sobre />
        <Funcionalidades />
        <Beneficios />
        <Footer />
      </main>
    </>
  );
}

export default App;
