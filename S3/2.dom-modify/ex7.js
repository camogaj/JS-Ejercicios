// Basandote en el siguiente html, elimina todos los nodos que tengan la 
// clase .fn-remove-me

// let body$$ = document.body.querySelectorAll('body *')

// for (const child of body$$) {
//     if (child.className == "fn-remove-me") {
//         document.body.removeChild(child)
//     }

    
// }

let ps$$ = document.body.querySelectorAll('.fn-remove-me')

for (const element of ps$$) {
    element.remove()
}

