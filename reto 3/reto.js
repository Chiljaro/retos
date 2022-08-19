console.log("Reto 3");
for (let i = 1; i <= 100; i++) {
    let mitad = i / 2;
    for (let j = Math.floor(mitad); j > 0; j--) {
        if (j === 1) {
            i === 2 ? console.log("Este es primo", i) : i === 3 && console.log("Este es primo", i)
        } else {
            if(i % j === 0) {
                break
            } else if( j === 2 ) console.log("Este es primo", i);
        }
    }
}