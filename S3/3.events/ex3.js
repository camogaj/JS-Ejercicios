// Basandote en el siguiente html, 
// añade un evento 'input' que ejecute un console.log 
// con el valor del input.




function handleChange(event){
    console.log(event.target.value);
}

const text = document.querySelector('input');
text.addEventListener('input', handleChange);
