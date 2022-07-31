// Inserta dinamicamente en un html un div que contenga 
// 6 p utilizando un loop con javascript.

document.body.insertAdjacentHTML('afterbegin', '<div id="div"> </div>');
const div = document.getElementById("div")
for (let i = 0; i < 6; i++) {
    
div.insertAdjacentHTML("beforeend","<p></p>")
    
}


// const div$$ = document.createElement('div');

// for (let index = 0; index < 6; index++) {
//     const p$$ = document.createElement('p');
//     div$$.appendChild(p$$);
// }

// document.body.appendChild(div$$);
