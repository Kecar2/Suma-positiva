
/**
 * 
 * @param {*} palabraSecreta 
 * @param {*} posicion
 * 
 * Devuelve:
 * -1: Si la letra NO está en la palabra secreta
 * 0: Si la letra está en la palabra secreta PERO en una posición diferente
 * 1: Si la letra está en la palabra secreta Y está en la posición correcta 
 */
 function rightOrder(palabraSecreta, letra, posicion) {
    rightOrder.forEach(element => console.log(element));
     
     
}

let palabraSecreta = [
    {
        letra: "S",
        posicion: 0
    },
    {
        letra: "A",
        posicion: 1
    },
    {
        letra: "U",
        posicion: 2
    },
    {
        letra: "N",
        posicion: 3
    },
    {
        letra: "A",
        posicion: 4
    }
];


rightOrder(palabraSecreta, "I", 1); // -1
rightOrder(palabraSecreta, "S", 4); // 0
rightOrder(palabraSecreta, "S", 0); // 1

/***
 * Recorrer el array y devolver 
 */