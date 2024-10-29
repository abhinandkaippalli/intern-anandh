let i = 1

while (i <= 5) {
  console.log('OH hi', i);
  i++;

}


i = 5;

while (i >= -5) {
  console.log("yes it is", i);
  i--;

}


let a = 1
do {
  console.log("HI", a);
  i++;

} while (a >= 5)

let topic = "FOR";
console.log(topic);

// intialize,condition,increment

for (i = 1; i <= 5; i++) {
  console.log("HI", i)
}



for (let b = 1; b <= 100; b++) {

  if (b % 3 === 0)
    console.log("i am divisible by 3", b);

}


let num = 12345679
while (num > 0) {
  console.log(num % 10);
  num = parseInt(num / 10)
}

num1 = 123456789
let num2 = 0
while (num1 > 0) {
  num2 = (num2 * 10) + (num1 % 10);  // 0+9=9
  num1 = parseInt(num1 / 10);
  console.log(num2%10);
}
console.log(num2);









