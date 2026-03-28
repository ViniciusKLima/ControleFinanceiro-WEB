import "./App.css";
import Header from "./Components/header/header";
import Hero from "./Components/hero/hero";
import Problemas from "./Components/problemas/problemas";
import Sobre from "./Components/sobre/sobre";
import Funcionalidades from "./Components/funcionalidades/funcionalidades";
import Beneficios from "./Components/beneficios/beneficios";

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
      </main>
    </>
  );
}

export default App;
