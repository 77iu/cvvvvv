const menu = document.getElementById("menu");
const botonesA = document.getElementById("botonesA");
const enlace = document.getElementById("enlace");
const enlace2 = document.getElementById("enlace2");
const enlace3 = document.getElementById("enlace3");
const enlace4 = document.getElementById("enlace4");
const enlace5 = document.getElementById("enlace5");
const opens   = document.getElementById("opens");
const closes  = document.getElementById("closes")

function cambiar() {
botonesA.classList.toggle("botonesAA");
botonesA.classList.toggle("deBloque");
enlace.classList.toggle("botonesAnimacion");
enlace2.classList.toggle("botonesAnimacion");
enlace3.classList.toggle("botonesAnimacion");
enlace4.classList.toggle("botonesAnimacion");
enlace5.classList.toggle("botonesAnimacion");
opens.classList.toggle("animationOpen");
closes.classList.toggle("animationClose");
}

menu.onclick = function(){cambiar();}
enlace.onclick = function(){cambiar();}
enlace2.onclick = function(){cambiar();}
enlace3.onclick = function(){cambiar();}
enlace4.onclick = function(){cambiar();}
enlace5.onclick = function(){cambiar();}
