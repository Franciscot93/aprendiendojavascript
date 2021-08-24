// crear un array con datos

let series = ["Naruto", "the good doctor", "game of thrones", 2, 8, true];

//mostrar un array vacio
let temporadas =[];

//mostrar un valor del array

document.write(series[0]);

//agregar un elemento al final del array
series.push("Dr.House");

//contar elementos de una cadena de texto
console.log(series.length)
document.write("<br>"+ series[6]);

//recorrer cada elemento del array
for(let posicion=0; posicion < series.length; posicion++){
    document.write("<br> Serie: "+ series[posicion]);
}

//agregar un elemento en una posicion particular
series.splice(1,0,"Loki");
for(let posicion=0; posicion < series.length; posicion++){
    document.write("<br> Serie: "+ series[posicion]);
}

//eliminar un elemento o varios desde una posicion particular del array
series.splice(4,2);
for(let posicion=0; posicion < series.length; posicion++){
    document.write("<br> Serie: "+ series[posicion]);
}

//modificar valores del array
series[4] = "Vikingos";
for(let posicion=0; posicion < series.length; posicion++){
    document.write("<br> Serie: "+ series[posicion]);
}

// eliminar todos los elementos desde una posicion en particular
series.splice(2);
for(let posicion=0; posicion < series.length; posicion++){
    document.write("<br> Serie: "+ series[posicion]);
}