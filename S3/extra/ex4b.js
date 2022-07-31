// Dado el siguiente array de objetos. 
// Crea dinamicamente en el html una lista de div 
// que contenga un elemento h4 para el titulo y 
// otro elemento img para la imagen. 

// Basandote en el ejercicio anterior. 
// Crea un botón que elimine el último elemento de la lista.

const countries = [{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=1'}, 
{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=2'},
{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=3'},
{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=4'},
{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=5'}];

for (let i = 0; i < countries.length; i++) {
    const div$$ = document.createElement("div")
    const countrie = countries[i];
    div$$.innerHTML = div$$.innerHTML = `<h4>${countrie.title}</h4><img src="${countrie.imgUrl}"/>`;
    document.body.appendChild(div$$);
}

const btn$$ = document.querySelector("button");

btn$$.addEventListener("click", function () {
    const allDiv$$ = document.body.querySelectorAll("div");
    allDiv$$[allDiv$$.length - 1].remove();
})

