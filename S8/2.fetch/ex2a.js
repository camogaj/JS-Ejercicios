// Utiliza esta url de la api Agify 'https://api.agify.io?name=michael' 
// para hacer un .fetch() y recibir los datos que devuelve. 
// Imprimelo mediante un console.log(). 
// Para ello, es necesario que crees un .html y un .js.


const baseUrl = 'https://api.nationalize.io';

const input$$ = document.querySelector('input');

const search = () => {
    // const input$$ = event.target.previousElementSibling;
    // const input$$ = document.querySelector('input');

    fetch(baseUrl + '?name=' + input$$.value).then(res => res.json()).then(res =>{
        console.log(res);
    })
}


const button$ = document.querySelector('button');

button$.addEventListener('click', search);