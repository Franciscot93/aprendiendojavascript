document.write("elemento 1<br>");
document.write("elemento 2<br>");
document.write("elemento 3<br>");
document.write("elemento 4<br>");
document.write("elemento 5<br>");
document.write("elemento 6<br>");
document.write("elemento 7<br>");

//while

/*
while(condicion logica){
    codigo a ejecutar
    cambiar condicion loguica para cancelar el bucle
}
*/

let contador = 1 
while(contador <=20){
    document.write("elemento"+contador +"<br>");
    contador++//contador = contador +1;
    
}

//estructura do-while (hacer mientras se sigue la condicion logica)

let cont = 1

do{
    //codigo que quiero ejecutar
    document.write("contador "+ cont + "<br>");
    //cambio la condicion logia
    cont++
}while(cont <= 20);
/*
// for(crear la variable; condicion logica; incrementar o decrementar la varaibble){
    ... codigo a ejecutar muchas veces
}
*/

for(let i = 1 ; i <= 20; i = i+2){
    document.write("estructura for vuelta " +i +"<br>");
}