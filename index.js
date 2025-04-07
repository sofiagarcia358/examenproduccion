import { cargarMenu } from "./componentes/header/header.js";
let DOM = document.querySelector("#root");

function cargarDom(){
    let contenedor = document.createElement(div);
    contenedor.className = "contenedor";
    contenedor.appenChild(cargarMenu());

    return contenedor;
}
DOM.appenChild(cargarDom());

