//Crea una función llamada ``swap`` que reciba un array y dos parametros que sean indices del array. La función deberá 
//intercambiar la posición de los valores de los indices que hayamos enviado como parametro. Retorna el array 
//resultante.

//Sugerencia de array:

['Mesirve', 'Cristiano Romualdo', 'Fernando Muralla', 'Ronalguiño']
function rollDice(maxNum){
    return Math.floor(Math.random() * (maxNum - 1) + 1);
}

console.log(rollDice(10));
console.log(rollDice(20));
console.log(rollDice(6));
function swap(array, firstIndex, secondIndex){
    const firstElement = array[firstIndex];
    array[firstIndex] = array[secondIndex];
    array[secondIndex] = firstElement;

    return array;
}

const newArray = swap(['Mesirve', 'Cristiano Romualdo', 'Fernando Muralla', 'Ronalguiño'], 0, 2)
console.log('##ABEL## >> swap >>  ', newArray);
