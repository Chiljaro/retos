console.log("reto 4");
// triángulo = 1; Cuadrado = 2; Rectangulo = 3

const poligonosArea = (poligono, a, b) => {
    if (poligono == 1) {
        console.log("Triángulo");
        return (a * b) / 2 
    } else if (poligono == 2) {
        console.log("Cuadrado");
        return a * a
    } else {
        console.log("Rectángulo");
        return a * b
    }
}

console.log(poligonosArea(3, 2, 3))