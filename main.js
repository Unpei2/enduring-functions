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
// works for isEven too 
function isDivisibleBy(number,divisor){
    let remainder = number % divisor
    if (remainder > 0){
        return false
    }   else {
        return true
    }
}

// pointlocation
function pointLocation (x, y){
    if (x == 0 && y == 0){
    return "origin"
    }   else if (x != 0 && y == 0){
        return "x axis"
    }   else if (x == 0 && y != 0){
        return "y axis"
    }   else if (x > 0 && y > 0){
        return "quadrant I"
    }   else if (x < 0 && y > 0){
        return "quadrant II"
    }   else if (x < 0 && y < 0){
        return "quadrant III"
    }   else if (x > 0 && y < 0){
        return "quadrant IV"
    }
}

// Ordinal adjective
function ordinalAdjective(number){
array = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
if (number === 1){
    return array[1] += "st" 
}   else if (number === 2){
    return array[2] += "nd"
}   else if (number === 3){
    return array[3] += "rd"
}   

else if (number >= 4){
    return `${number}th`
}
// else if (number >= 4){
//     return array[number] += "th"
// }
}

// minPayment
function minPayment(balance){
    payment = balance * 0.021
    if (payment >= 10){
        return payment
    }   else if (balance < 10) {
        return balance
    }   else {
        return 10
    }

}