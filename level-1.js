//    question 1
var  fores = "rabbit";


//   question 2
var person = { name:  "Adam", 
               age:  30 };

//   question 3
 var outOfStock = true;
if ( outOfStock === true ) {
    console.log("The prodect is out of stock");
} 
else { console.log  ("The prodect is in stock");}


//   question 4
 var numbers = ["1", "2", "3", "4", "5"];
console.log (numbers[0]);
console.log (numbers[1]);
console.log (numbers[2]);
console.log (numbers[3]);
console.log (numbers[4]);


//   question 5
 for (var count=15;  count<=25; count++)
     {console.log (count);} 


//   question 6
for (var count=15;  count===20; count++)
     {console.log (count);} 

//   question 7
var babys = [
    
    {
        name: "Lion",
        age: 1,
        haveSister: true
    },
    
    {
        name: "Sara",
        age: 3,
        haveSister: false
    }
];
for(var i = 0; i < babys.length; i++) {
    console.log(babys[i].age);
    console.log(babys[i].haveSister);
}


//   question 8
function whatDontLike(typeFood) {
    console.log("I don't like " + typeFood);
}

whatDontLike("chees");


//   question 9
function subtractnumbersOfPens (pens, pencils) {
    var sum = pencils - pens;
    console.log(sum);
}
subtractnumbersOfPens(6, 12);



//   question 10

var blue =[];
function colourfull(raninbow) {
    console.log(rainbow + blue);
}
typeof(colourfull);
"function"
