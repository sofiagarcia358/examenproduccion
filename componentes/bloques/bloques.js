function cargarBloques(){
    let div = document.createElement(div)
    div.className = "fondo";

    let cuadro = document.createElement('div');
    cuadro.className = "cuadros";
    div.appendChild(cuadro);

    let btnx =document.createElement('button');
    btnx.className = "btn1";
    btnx.innerText = "X";
    cuadro.appendChild(btnx);

    let btn2 = document.createElement('button');
    btn2.className = "btn2";
    btn2.innerText = "/"
    cuadro.appendChild(btn2);

    return cuadro;
}
export{cargarBloques};