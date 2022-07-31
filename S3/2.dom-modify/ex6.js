// Basandote en el siguiente array crea una 
// lista ul > li con los textos del array.


const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter'];

// document.body.appendChild(document.createElement("ul"))
// const ul$$ = document.querySelector("ul")
// for (const app of apps){
//     let li$$ = document.createElement("li")
//     li$$.textContent=app
//     ul$$.appendChild(li$$)

// }

const ul$$ = document.createElement("ul");
for (const app of apps){
    let li$$ = document.createElement("li")
        li$$.textContent=app
        ul$$.appendChild(li$$)
}
document.body.appendChild(ul$$)