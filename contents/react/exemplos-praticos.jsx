import React from "react";
import ReactDOM from "ract-dom";

//Primeiros Passos
ReactDOM.render(
    <h1>Título</h1>,
    document.getElementByID("root")
)

//Componentes Funcionais
const App = (props) => {
    const name = props.name;
    return ( 
        <div>
            <h1>Hello, {name}</h1> 
            <p>Welcome to my first React component!</p> 
        </div>
    )
};

<App name="William Cardoso"/>

//Componentes de Classe
const 
