// Basandote en el siguiente html y javascript,
// inserta p con el texto 'Voy dentro!', dentro de todos los 
// div con la clase .fn-insert-here


let p$$ = "<p>Voy dentro!</p>"
let div$$ = document.querySelectorAll(".fn-insert-here")

div$$.forEach(element => {
    element.insertAdjacentHTML('beforeend', p$$)
});

        