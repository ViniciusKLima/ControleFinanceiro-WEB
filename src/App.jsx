import "./App.css";
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
      </main>
    </>
  );
}

export default App;