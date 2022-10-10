import React, { Component } from "react";
import FormularioCadastro  from "./components/FormularioCadastro";
import ListaDenotas from "./components/ListaDeNotas";

class App extends Component{
  render(){
    return (
      <section>
        <FormularioCadastro/>
        <ListaDenotas/>
      </section>
    );
  }
}
export default App;