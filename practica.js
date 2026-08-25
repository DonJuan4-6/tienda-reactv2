//console.log("JavaScript listo para practicar");
/*
function calcularTotal(precio, cantidad) {
const total = precio * cantidad;
return total;
}
const resultado = calcularTotal(50000, 3);
console.log(resultado);
*/


//CONVERTIR FUNCION A FUNCION TIPO FLECHA
/* Funcion a convertir:
    function esMayorEdad(edad) { return edad >= 18; }
*/
/*
let edad = 19; //ejemplos con 15 y 19
const esMayorEdad = edad => edad >= 18;
if (edad >= 18){
    console.log("Es mayor de edad")
}else{
    console.log("Es menor de edad")
}
*/

//ARREGLOS DE OBJETOS:
// Reto: agregar 7 productos mas sin repetir id
const productos = [
  { id: 1, nombre: 'Mouse', precio: 50000, stock: 5 },
  { id: 2, nombre: 'Teclado', precio: 100000, stock: 0 },
  { id: 3, nombre: 'Monitor', precio: 650000, stock: 3 },
  { id: 4, nombre: 'CPU Core i7', precio: 780000, stock: 4 },
  { id: 5, nombre: 'GPU RTX 4060', precio: 1500000, stock: 2 },
  { id: 6, nombre: 'RAM 16GB', precio: 600000, stock: 6 },
  { id: 7, nombre: 'Disco SSD 1TB', precio: 400000, stock: 1 },
  { id: 8, nombre: 'Audifonos', precio: 90000, stock: 3 },
  { id: 9, nombre: 'HDMI', precio: 20000, stock:  1 },
  { id: 10, nombre: 'Fuente de poder 750W', precio: 720000, stock: 0 },

];
//TERNARIO
const producto = productos.find(p => p.id === 9);

const copiaProducto = {
    ...producto,
    stock: 5
};
console.log(copiaProducto.stock > 0 ? 'Disponible' : 'Agotado');


//forEach vs map()
/*const nombres = productos.map(producto => {
    console.log(producto.nombre)
    return producto.nombre;
});
*/

/*
//filter() -> ENCUENTRA LISTAS DE ELEMENTOS
console.log("Productos en un rango de precio entre 50000 y 200000");
const disponibles = productos.filter(
    producto => producto.precio >= 50000 && producto.precio <= 200000
);
console.log(disponibles);

//find() -> ENCUENTRA UN SOLO ELEMENTO
const encontrado = productos.find(
    producto => producto.id == 5
);
console.log("Producto con id: 5");
console.log(encontrado);

*/


//some(), ever() y reduce()
/*
const hayAgotados = productos.some(p => p.stock === 0);

const preciosValidos = productos.every(p => p.precio > 0);

const valorInventario = productos.reduce(
    (total, p) => total + p.precio * p.stock,
    0
);
console.log("Hay productos agotados?",hayAgotados);
console.log("Todos los productos tienen valor asignado?",preciosValidos);
console.log("Valor total del inventario:",valorInventario);
*/







/*
//FUNCION SUMAR a,b
function suma(a, b) {
const suma = a + b;
return suma;
}
const resultado_suma = suma(2332, 3543);
console.log("El resultado de la suma es:",resultado_suma);


//FUNCION RESTAR
function resta(a, b) {
const resta = a - b;
return resta;
}
const resultado_resta = resta(5012, 786);
console.log("El resultado de la resta es:",resultado_resta);


//FUNCION MULTIPLICAR
function multiplicacion(a, b) {
const multiplicacion = a * b;
return multiplicacion;
}
const resultado_multiplicacion = multiplicacion(32, 21);
console.log("El resultado de la multiplicacion es:",resultado_multiplicacion);


//FUNCION DIVIDIR
function division(a, b) {
const division = a / b;
return division;
}
const resultado_division = division(52, 4);
console.log("El resultado de la division es:",resultado_division);


//FUNCION PROMEDIO
function promedio(nota1, nota2, nota3) {
const promedio = (nota1 + nota2 + nota3) / 3 ;
return promedio;
}
const result_promedio = promedio(100, 90, 50);
console.log("El promedio es:",result_promedio);


DIFERENCIA ENTRE 'console.log()' y 'return'
Return, es un valor que devuelve una funcion cuando se llama a la misma, no es
un metodo para imprimir en consola o en pantalla.
console.log si que es un metodo para imprimir texto, variables o funciones en 
la consola o terminal de visual studio code desde JavaScript.

*/



//RETO 2: FUNCIONES FLECHA+
/*
function aplicarIva(precio) {
return precio * 1.19;
}

const aplicarIva = precio => precio * 1.19;
*/
//CONVERTIR (CUADRADO)