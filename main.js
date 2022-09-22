// Greeting function
function greeting(name, timeofday){
    return `Hello ${name}. Have a great ${timeofday} `
}

// Fahrenheit to celcius function
function fahrToCels(temperature){
    return (temperature - 32) * 5 / 9
    
}

// Heron's formula?
function heronsFormula(a, b, c){
    s = (a + b + c) / 2
    return Math.sqrt(s * (s-a) * (s - b) * (s - c))
}
// height check
function heightCheck(height){
    if (height >= 82){
        return "All Aboard!"
    }   else {
        return "Too short for ride."
    }
}
// Analyze number
function analyzeNumber(num){
    if (num > 0){
        return "positive"
    } else if (num === 0){
        return "zero"
    }  else {
        return "negative"
    }
}

// grade feedback
function gradeFeedback(grade){
    if (grade >= 80){
        return "good job"
    }   else if (grade >= 50){
        return "passable"
    }   else {
        return "keep trying"
    }
}

// abs
function abs(number){
    return Math.sqrt(number * number)
}

// isEven
function isEven (number){
    let array = [number]
    array = JSON.stringify(array)
    array = array.split("")
    array.pop()
    let x = array.pop()
    if (x == 0 || x == 2 || x == 4 || x == 6 || x == 8){
        return true
    }   else {
        return false
    }
}

// is divisible by
// function isDivisibleBy(number,divisor){
//     if (number / divisor)
// }