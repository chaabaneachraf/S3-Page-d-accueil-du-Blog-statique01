let nombers= [23, 15, 42, 9, 31, 18, 42, 5];
let maximun= nombers[0];
let positionMax=0;
for( let i =0; i <nombers.length;i++){
    if(nombers[i]> maximun){
        maximun= nombers[i];
        positionMax=i;
    }
}
console.log( "Maximum : " , maximun ,"(index) " , positionMax);

let Minimun= nombers[0];
let positionMin=0;
for( let i =0; i <nombers.length;i++){
    if(nombers[i]< Minimun){
        Minimun= nombers[i];
        positionMin=i;
    }
}
console.log( "Minimum : " , Minimun,"(index) " , positionMin);
let rechreche=31;
let position= -1;
for( let i =0; i <nombers.length;i++){
   if( nombers[i]===rechreche){
    rechreche=nombers[i];
    position=i
    }
}
console.log("La valeur 31 est présente dans le tableau." ,position)