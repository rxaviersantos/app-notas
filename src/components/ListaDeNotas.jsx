import React, { Component } from "react";
import CardNota from "./CardNota";

class ListaDenotas extends Component {

    render(){
        return(
            <ul> 
              {Array.of("Trabalho", "Trabalho", "Estudos").map((categoria) => {
                return (
            <li>
              <div>{categoria}</div>
              <CardNota/>
            </li>
                )
              })}
          </ul>
        );
    }

}

export default ListaDenotas;