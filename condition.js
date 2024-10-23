let num1 = 8;
let num2 = 6;
let num3;

if (num1 > num2) {
    console.log("num1 is greater");
    num3 = num1 + num1;
    if (num3 < num2) {
        console.log("num2 is greater")
    } else {
        console.log("system error")
    }
    console.log("bye...")
}

//Ternary Operator

let topic = " TOPIC_Ternary Operator"
console.log(topic)

let num = 10
let result

// if (num%2===0)
//     result = "its evennn"
// else
//     result = "ohh odd"

result = num%2===0 ? "EVEN" : "ODD"
console.log(result);

//SWITCH STATEMENT

let day = "monday"

switch(day){
    case 'monday':
       console.log('7am');
    break;
    case 'tuesday':
    case 'wednesday':
    case 'thursday':
        console.log('4am');
    break;
    case 'friday':
       console.log('10am');
    break;
    case 'satday':
       console.log('11am');
    break;
    case 'sunday':
       console.log('12am');
    break;
}

console.log('itsss time------');

//Template literal

num1 = 10
num2 = 5
result = num1 + num2
console.log(`the sum of ${num1} and ${num2} is ${result}`);



