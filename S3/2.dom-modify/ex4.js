// Inserta dinamicamente con javascript 
// en un html una p con el texto 'Soy dinámico!'.

let node_p = document.createElement("p")
let node_text = document.createTextNode("Soy dinámico!")


document.body.appendChild(node_p).appendChild(node_text)

// const p$$ = document.createElement('p');

// p$$.textContent = 'Soy dinámico!';

// document.body.appendChild(p$$);

