import "./App.css";
import Funcionalidades from "./Components/funcionalidades/funcionalidades";
import Header from "./Components/header/header";
import Hero from "./Components/hero/hero"
import Problemas from "./Components/problemas/problemas"

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Problemas />
        <Funcionalidades />
      </main>
    </>
  );
}

export default App;