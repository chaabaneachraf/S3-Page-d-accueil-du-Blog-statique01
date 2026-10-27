let ventes = [110, 75, 150, 180, 90, 130, 100, 160];
let CATotal = 0;
let max = ventes[0];
let min = ventes[0];
let nbExceptionnelles = 0;
let CAExceptionnelles = 0;


for (let i = 0; i < ventes.length; i++) {
    let v = ventes[i];
    CATotal = CATotal + v;

    if (v > max) {
        max = v;
    }
    if (v < min) {
        min = v;
    }

    if (v >= 130) {
        nbExceptionnelles++;
        CAExceptionnelles = CAExceptionnelles + v;
    }
}

console.log(ventes.length, "ventes");
console.log("CA Total ", CATotal);
console.log("Max ", max, "| Min ", min);
console.log("Nombre de ventes exceptionnelles :", nbExceptionnelles);
console.log("CA des ventes exceptionnelles :", CAExceptionnelles);