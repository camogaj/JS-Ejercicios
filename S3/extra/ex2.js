// Basandote en el html siguiente, 
// elimina el elemento que tenga la clase 
// .fn-remove-me.

const p$$ = document.body.querySelectorAll(".fn-remove-me")
for (const element of p$$) {
    element.remove()
    
}

