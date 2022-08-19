console.log("Reto 2");
let sumando1 = 0, sumando2 = 0, impreso = 0
for (let i = 0; i <= 50; i++) {
    if(i === 0) {
        sumando1 = i 
    } else if( i === 1) {
        sumando2 = i
        impreso = sumando1 + sumando2
    } else {
        impreso = sumando1 + sumando2
        sumando1 = sumando2
        sumando2 = impreso
    }
    console.log(impreso);
    console.log("------");
}