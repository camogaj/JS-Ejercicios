// Basandote en el siguiente html, inserta en el h2 con la clase 
// .fn-insert-here el texto 'Wubba Lubba dub dub'.

// es el mio
// let node_h2 = document.getElementsByClassName("fn-insert-here")[0]
// node_h2.appendChild(document.createTextNode("Wubba Lubba dub dub"))

// es como añadir texto a lo anterior
// let node_h2 = document.getElementsByClassName("fn-insert-here")[0]
// node_h2.textContent = 'Wubba Lubba dub dub' + ' ' + node_h2.textContent


let node_h2 = document.getElementsByClassName("fn-insert-here")[0]
node_h2.textContent = 'Wubba Lubba dub dub'



console.log(node_h2)
