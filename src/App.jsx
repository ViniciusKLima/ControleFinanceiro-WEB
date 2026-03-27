import "./App.css";
import Funcionalidades from "./Components/funcionalidades/funcionalidades";
import Header from "./Components/header/header";
import Hero from "./Components/hero/hero"
import Problemas from "./Components/problemas/problemas"
import Sobre from  "./Components/sobre/sobre"

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Problemas />
        <Funcionalidades />
        <Sobre />
      </main>
    </>
  );
}

export default App;