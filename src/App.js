import React from "react";
import ListaDenotas from "./components/ListaDeNotas";

function App() {
  return (
    <section>
    <form>
      <input Type="text" placeholder="Título"/>
      <textarea placeholder="Escreva sua nota..."/>
      <button>Criar Nota</button>
    </form>
    <ListaDenotas/>
    </section>
  );
}

export default App;
