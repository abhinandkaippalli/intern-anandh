// complex objects

let alien = {
    name: 'anandh',
    tech: 'IT',
    laptop: {
        cpu: 'i7',
        ram: '4',
        brand: 'tataya',
        built_1: 'me'
    }
}

for (let key in alien) {
    console.log(key, alien.laptop[key])
}

// functions

function greet() {
    console.log('Hello world');

}

greet()

// function return and  passing

function hai() {
    return 'hello world'
}

let str = hai();
console.log(str);

function hey(user)   // accepting value
{
    return `hey  ${user}`   // indicates to print the value
}
let user = 'anandh!!!!';
let string = hey(user);  //passing value
console.log(string);

//function expression

let add = function (num1, num2) {
    return num1 + num2;
}
let sum = add;
let result = sum(4, 6);
console.log(result);

/// local golbal variable

let glo = 'hari';

function loc(u)
{
	let num = 5;
	console.log(num);
	return `Hello ${u}`
}

///console.log('value is'+ num);
let abc= loc(glo);
console.log(str);

//// arrow function
let arrow = (user) =>{
    console.log("hello "  + user);
    return 1;
}

console.log(arrow('arr_fun'));


let addition = (ab,bb) => ab + bb;

let answer = addition(10 , 20)
console.log(answer);

// method

let lap_top = {
    cp_u :'i9',
    ra_m : 16,
    bran_d : 'hp',

    //system : function(){
        getconfig : function(){
        //console.log('Hai I am a laptop');
        console.log(this.cp_ u);
    }
}

lap_top.getconfig();


