
// Ciclo While
let numero = 1;
//debugger;
while (numero < 10) {
    //debugger;
    numero++;
    console.log(numero);
}

numero = 1;
let permiso = false;
do {
  //debugger;  
  numero++;
  console.log(numero);   

} while (numero<3);

numero = 1;
do {
  let user = prompt("Ingrese su usuario");
  
  if (user=="Miguel Blanco") {
      permiso = true;
      document.write("Iniciaste");    
  }
  
} while (permiso);


// ciclo for
// for (let i = 1; i < 3; i++) {
//     console.log(i);
// }

// for (let i = 0; i < i <= 6; i++) {
//     console.log(i);
    
// }

let lista = ["gato","perro","gallina","elefante","delfin", "toro"];

for (let index = 0; index < lista.length; index++) {
    console.log(lista[index]);
}

for(dato in lista){
    console.log(dato);
}



