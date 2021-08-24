let numero1 = parseInt(prompt("ingrese un primer numero"));
let numero2 = parseInt(prompt("ingrese un segundo numero"));

document.write("numero 1= "+numero1);
document.write("<br>numero 2= "+numero2);

// estructura if
/*
if(condicion logica){codigo a ejecutar si la respuesta es verdadera o true}
*/

if(numero1 > numero2){
    document.write("<br> El numero 1 es mayor al numero 2");
}else{ //codigo a ejecutar si no se cumple la condicion
    if(numero1 == numero2){document.write("<br> Los numeros ingresados son iguales");}else{
    document.write("<br> El numero 2 es mayor al numero 1");}}
