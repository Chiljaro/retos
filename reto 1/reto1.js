console.log("Reto 1");
let palabra1 = "Enrique", palabra2 = "quieren";

// if (palabra1 === palabra2) {
//         console.log("no es anagrama");
// } else {
//         if (palabra1.length === palabra2.length) {
//                 palabra1.toUpperCase().split('').sort().join() === palabra2.toUpperCase().split('').sort().join() && console.log("Es un anagrama")
//         } else console.log("no es anagrama")
// }

palabra1.toUpperCase().trim() === palabra2.toUpperCase().trim() ? console.log("no es anagrama") : palabra1.toUpperCase().trim().split('').sort().join() === palabra2.toUpperCase().trim().split('').sort().join() ? console.log("Es un anagrama") : console.log("no es anagrama")