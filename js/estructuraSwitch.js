/*
switch(operacion){
    case 1:
        //todo el codigo a ejecutar si se eligio la opcion 1 por parte del usuario
        breack;
        case 2:
            .....
            breack;
        case "otros":
            .....
        breack;
        default:
        codigo a ejecutar por defecto 
}
*/

let estacion = prompt("ingrese su estacion del año preferica: 1- verano, 2- inviero, 3-otoño, 4-primavera");

switch(estacion){
    case "1":
        document.write("el usuario selecciono la estacion Verano");
        break;
    case "2":
        document.write("el usuario selecciono la estacion Invierno");
        break;
    case "3":
        document.write("el usuario selecciono la estacion Otoño");
        break;
        case "4":
            document.write("el usuario selecciono la estacion Primavera");
        break;
    default:
        alert("ingreso una opcion invalida");
                

}

//frase.length = devuelve la cantidad de caracteres
// frase.charAt(indice)