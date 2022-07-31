// Basandote en el siguiente html,
// inserta una p con el texto 'Voy en medio!' 
// entre los dos div. 
// Recuerda que no solo puedes insertar elementos con .appendChild.

let p$$ = "<p>Voy en medio!</p>"
let div$$ = document.body.querySelectorAll("div")[0]
div$$.insertAdjacentHTML('afterend', p$$)
