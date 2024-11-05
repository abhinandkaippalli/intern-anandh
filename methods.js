
let laptop1 = {
    cpu : 'i9',
    ram : 16,
    brand : 'hp',

    compare : function(other){
        if (this.cpu > other.cpu) 
            console.log(this);
        
        else
            console.log(other);
    },

    getconfig : function () {
        console.log(this.cpu);
        
    }
}

laptop1.getconfig();

let laptop2 = {
    cpu : 'i7',
    ram : 16,
    brand : 'apple',

    getconfig : function () {
        console.log(this.cpu);
        
    }
}

//console.log(getthefastlaptop)
//getthefastlaptop(laptop1,laptop2);

laptop1.compare(laptop2);

// Constructor function

function con_Alien(name,tech){
     this.name = name;
     this.tech = tech;

     this.work = function(){
        console.log('tvm');
     }
     
}
let alien1 = new con_Alien('Anandh','JS');
let alien2 = new con_Alien('Amar','Java');
alien2.name = 'remya';
console.log(alien2);
alien2.work();
console.log(alien1)
alien1.work();
