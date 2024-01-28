var lista = [];

let valor1 = prompt ("Dame el primer valor");
let valor2 = prompt ("Dame el segundo valor");
let valor3 = prompt ("Dame el tercer valor");
let valor4 = prompt ("Dame el cuarto valor");
let valor5 = prompt ("Dame el quinto valor");
let valor6 = prompt ("Dame el sexto valor");
let valor7 = prompt ("Dame el septimo valor");
let valor8 = prompt ("Dame el octavo valor");
let valor9 = prompt ("Dame el noveno valor");
let valor10 = prompt ("Dame el decimo valor");

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

function Burbuja() {
    
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
    
    alert(lista);
}