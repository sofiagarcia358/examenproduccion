
function cargarMenu(){
let div = document.createElement('div');
div.className = "header";

let total1 = document.createElement('div');
total1.className = "TotalX";
total1.innerText = "Total X =";
div.appenChild(total1)

let total2 = document.createElement('div');
total2.className = "Total2";
total2.innerText = "Total / ="
div.appenChild(total2)

return div;
}
export{cargarMenu}