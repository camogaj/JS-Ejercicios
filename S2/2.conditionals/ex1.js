//Comprueba en cada uno de los usuarios que tenga almenos dos trimestres aprobados y añade la propiedad isApproved a true o false en consecuencia. 
//Una vez lo tengas compruebalo con un console.log.

const alumns = [
    { name: 'Pepe Viruela', T1: false, T2: false, T3: true}, 
    { name: 'Lucia Aranda', T1: true, T2: false, T3: true }, 
    { name: 'Abel Cabeza', T1: false, T2: true, T3: true }, 
    { name: 'Alfredo Blanco', T1: false, T2: false, T3: false }, 
    { name: 'Raquel Benito', T1: true, T2: true, T3: true }
]

for (const alumno of alumns){
    var contador=0;

    if(alumno.T1==true){
        contador++;
    }
    if(alumno.T2==true){
        contador++;
    }
    if(alumno.T3==true){
        contador++;
    }
    if(contador >=2 ){
        alumno.isApproved=true;
    } else{
        alumno.isApproved=false;
    }
}

console.log(alumns)




