let panier = [15, 42, 5, 89, 12, 50, 8];
let som= 0;
let expensive=0;
let sum=0;
for (let i=0; i<panier.length;i++){
   som=som+panier[i];
   if( panier[i] >20){
    expensive++;
    sum=sum+panier[i];


   }

}
console.log("Total du panier :",som);
console.log("Nombre d'articles chers :", expensive )
console.log("Montant des articles chers :",sum)
