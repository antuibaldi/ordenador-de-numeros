var lista = [];

const texto= document.querySelector("#texto");


function Burbuja() {

    
const valor1= document.querySelector("#numero-1").value;
const valor2= document.querySelector("#numero-2").value;
const valor3= document.querySelector("#numero-3").value;
const valor4= document.querySelector("#numero-4").value;
const valor5= document.querySelector("#numero-5").value;
const valor6= document.querySelector("#numero-6").value;
const valor7= document.querySelector("#numero-7").value;
const valor8= document.querySelector("#numero-8").value;
const valor9= document.querySelector("#numero-9").value;
const valor10= document.querySelector("#numero-10").value;

lista.push(parseInt(valor1));
lista.push(parseInt(valor2));
lista.push(parseInt(valor3));
lista.push(parseInt(valor4));
lista.push(parseInt(valor5));
lista.push(parseInt(valor6));
lista.push(parseInt(valor7));
lista.push(parseInt(valor8));
lista.push(parseInt(valor9));
lista.push(parseInt(valor10));
    
    var n, i, k, aux;
    n=lista.length;
    console.log(lista);
    for ( k = 1; k < n; k++) {
        for ( i = 0; i < (n -k); i++ ) {
           if (lista[i]>lista[i+1]) {
            aux = lista[i];
            lista[i] = lista[i+1];
            lista[i+1] = aux;            
           }
         
        }
        
    }
    
    texto.innerHTML===" ";
    texto.innerHTML= lista.join(", ");


}