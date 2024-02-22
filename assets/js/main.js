(function () {
  console.log("Hola, bienvenido a mi sitio web!");
})();

(() => {
  console.log("Hola, bienvenido a mi sitio web! desde una funcion flecha");
})();


(function subscribete(nombre) {
  console.log(`Gracias por suscribirte ${nombre}`) ;
})('Cristian');

(function () {
    let texto = ' hola como estas'
    

    function saludar(){
        console.log(texto)
    }

    saludar()
})();

/* console.log(texto) */


var lenguaje = "Ruby";
(function () {
  var lenguaje = "JavaScript";
  console.log(lenguaje + " es un lenguaje de programación");
})();
console.log(lenguaje);


console.log('--------------------')

    let calculadora =(function () {
        function init() {
            console.log("Inicio del programa");
        }

        function suma(a, b) {
            return a + b;
        }

        function resta(a, b) {
            return a - b;
        }

        function multiplicar(a, b) {
            return a * b;
        }

        function dividir(a, b) {
            return a / b;
        }

        init();

        return {
            suma,
            resta,
            multiplicar,
            dividir
        }

    })();
     

console.log('---------------------')
     
    let modulo = (function () {
        let contador = 0

        function init() {
            console.log('Inicio del contador')
}
       /*  function incrementar() {
           return contador++
        }

        function resetear() {
            console.log('el valor del contador antes de reinciar es ' + contador)
            contador = 0;
        } */
        

        init()
        return {
            incrementar: () => {
                return ++contador
            },
            resetear: () => {
                console.log('el valor del contador antes de reinciar es ' + contador)
                contador = 0;
            }
}

    })();