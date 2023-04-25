let nombre = prompt("ingresar nombre");
let apellido = prompt("ingrese apellido");
let opcion;
let banana = 50;
let manzana = 60;
let pera = 70;
let naranja = 80;

alert("bienvenido " + nombre + " " + apellido + " a la verduleria online.");

function calcularTotal(compraB, compraP, compraM, compraN) {
    let total = (compraB * banana) + (compraP * pera) + (compraM * manzana) + (compraN * naranja);
    return total;
}

while (opcion !== 0) {
    opcion = parseInt(prompt("para consultar los precios precione 1\npara salir precione 0"));
    if (opcion === 1) {
        alert("banana " + banana + "$kg\n" + "manzana " + manzana + "$kg\n" + "pera " + pera + "$kg\n" + "naranja " + naranja + "$kg");
        let compraB = parseInt(prompt("ingrese la cantidad de kgs de bananas que desea.\n en caso de no desear bananas precione 0"));
        let compraP = parseInt(prompt("ingrese la cantidad de kgs de peras que desea.\n en caso de no desear peras precione 0"));
        let compraN = parseInt(prompt("ingrese la cantidad de kgs de naranjas que desea.\n en caso de no desear naranjas precione 0"));
        let compraM = parseInt(prompt("ingrese la cantidad de kgs de manzanas que desea.\n en caso de no desear manzanas precione 0"));

        let totalB = compraB * banana;
        let totalP = compraP * pera;
        let totalN = compraN * naranja;
        let totalM = compraM * manzana;

        let total = calcularTotal(compraB, compraP, compraM, compraN);

        alert(
            "Total de compra:\n" +
            "banana: $" + totalB + "\n" +
            "manzana: $" + totalM + "\n" +
            "pera: $" + totalP + "\n" +
            "naranja: $" + totalN + "\n" +
            "Total: $" + total
        );

        break;
    } else if (opcion === 0) {
        alert("que tenga un buen dia");
        break;
    } else {
        alert("ingrese un numero valido");
    }
}