for (let i = 1; i <= 100; i++) {
    let finalOutput = i;
    if (i % 15 === 0) {
            finalOutput = 'FizzBuzz'
    }
    else if (i % 3 === 0) {
            finalOutput = 'Fizz'
    }
    else if (i % 5 === 0) {
            finalOutput = 'Buzz'
    }
    //console.log(finalOutput)
}
for (let i = 1; i <= 100; i++) {
    let finalOutput = '';
    if (i % 3 === 0) {
            finalOutput += 'Fizz'
    }
    if (i % 5 === 0) {
            finalOutput += 'Buzz'
    }
    //console.log(finalOutput || i)
}
for(let i = 1; i <= 100; i++)console.log(( (i % 3 ? '' : 'Fizz') + (i % 5 ? '' : 'Buzz') ) || i);