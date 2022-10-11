import React, { Component } from "react";
import FormularioCadastro  from "./components/FormularioCadastro";
import ListaDenotas from "./components/ListaDeNotas/ListaDeNotas";
import "./App.css"
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