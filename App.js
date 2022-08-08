
let cuadra = document.getElementById("Btnc");

cuadra.addEventListener("click", cuadrado_area);

function cuadrado_area(){

    let xx;
    let yy;
    let rr;

    xx = Number(document.getElementById("lc1").value);
    yy = Number(document.getElementById("lc2").value);
    
    rr = xx * yy;

    let imprimir = document.getElementById("ac"); 

    imprimir.innerText = rr;

    const audio = document.getElementById("audio");

    audio.play();
}


let trian = document.getElementById("Btnt");

trian.addEventListener("click", triangulo_area);

function triangulo_area(){

    let a;
    let b;
    let c;
    let rr;

    a = Number(document.getElementById("lt1").value);
    b = Number(document.getElementById("lt2").value);
    c = Number(document.getElementById("lt3").value);

    rr = a * b * c / 2;

    let imprimir = document.getElementById("at"); 

    imprimir.innerText = rr;
}


let desc = document.getElementById("Btnd");
desc.addEventListener("click", descuento);
function descuento(){
    let pre;
    let tota;
    pre = Number(document.getElementById("d").value);
    if(pre > 1000)
        tota = (pre*30)/100;
    else(pre < 500)
        tota = (pre*10)/100
    let imprimir = document.getElementById("rd");
    imprimir.innerText = "Descuento de $"+tota+" Pesos";
}


let In_par = document.getElementById("Btnpi");
In_par.addEventListener("click", par_in);

function par_in(){

    let number;

    number = Number(document.getElementById("pi").value);

    if (number % 2 == 0 ) {
        let imprimir = document.getElementById("rpi");
        imprimir.innerText = "Número par";

    } else {
        let imprimir = document.getElementById("rpi");
        imprimir.innerText = "Número impar";
    }
}

let list = document.getElementById("Btnco");
list.addEventListener("click", listado);

function listado(){
    const numeros = document.getElementById("conteo");
    numeros.innerHTML = " ";

    for(let x=100; x>=0; x--){
        
        const lista = document.createElement("li");
        lista.setAttribute("class", "list-group-item");
        lista.innerText = `${x}`;
        numeros.appendChild(lista);
    
    }
}


Btnv = document.getElementById("Btnv").addEventListener("click", verificar);

function verificar(){
    let varn1 = Number(document.getElementById("v").value);

    if(varn1 >= 8 ){
        let a = document.getElementById("cal");
        a.innerText = "Aprobada"; 
    }else{
        let a = document.getElementById("cal");
        a.innerText = "Reprobada";
        audio = document.getElementById("audio");
        audio.play();
    }
}