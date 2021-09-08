// comece a criar a sua função add na linha abaixo
function add(number1,number2){
    let sum = number1 + number2
    
    return sum
}

// descomente a linha seguinte para testar sua função
console.assert(add(3, 5) === 8, 'A função add não está funcionando como esperado');


// comece a criar a sua função multiply na linha abaixo
function multiply(number1,number2){
    let multiplyNumber = 0
    
    for (let factor = 1; factor <= number2; factor++){        
        multiplyNumber += number1
        }

    return multiplyNumber
}

// descomente a linha seguinte para testar sua função
console.assert(multiply(4, 6) === 24, 'A função multiply não está funcionando como esperado');


// comece a criar a sua função power na linha abaixo
function power(number3, number4){
    endMultiply = number3    
    
    for (let factor = 1; factor <= number4 - 1; factor++){
        let powerNumber = number3
        
        for (let multiply = 1; multiply <= endMultiply - 1; multiply++)
            number3 += powerNumber    
    }

    return number3
}

// descomente a linha seguinte para testar sua função
console.assert(power(3, 4) === 81, 'A função power não está funcionando como esperado');


// comece a criar a sua função factorial na linha abaixo
function factorial(number){
    endMultiply = number

    for (let factor = 1; factor <= number - 1; factor++){
        let powerNumber = number
        endMultiply--
        console.log(number)
        for (let power = endMultiply - 1; power >= 1; power--){
            number += powerNumber
        }
    }
    console.log(number)
    return number
}

// descomente a linha seguinte para testar sua função
console.assert(factorial(5) === 120, 'A função factorial não está funcionando como esperado');


/**
 * BONUS (aviso: o grau de dificuldade é bem maior !!!)
 */

// crie a função fibonacci


// descomente a linha seguinte para testar sua função
// console.assert(fibonacci(7) === 13, 'A função fibonacci não está funcionando como esperado');
