const botonFib= document.getElementById("btn-fib");
const posicionFib=document.getElementById("posicion-fib");
const pFib=document.querySelector(".resultado-fib");

botonFib.addEventListener("click", escribirFibonacci);

function escribirFibonacci(){
    let posicion= posicionFib.valueAsNumber;
    let sucesion= fibonacci(posicion);
    let resultado='';
    for(let i=0;i<sucesion.length;i++){
        resultado+=sucesion[i]+" ";
    }
    if(resultado!=undefined){
        pFib.innerHTML=resultado;    
    }
}

function fibonacci(num){
    let fib= [];
    
    for (i=0;i<num;i++){
        if(i===0){fib[i]=0;}
        else if(i===1){fib[i]=1;}
        else{fib[i]= fib[i-1]+fib[i-2];}
    }    

    return fib
}
