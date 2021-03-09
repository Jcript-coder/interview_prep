//hositing is the default behaviour in JS by which the all the variables and functions declarations are moved 
//to top 
//disabled by using "use strict"

//not applicable for variables declared with let and const

/*

checkHoisting();
function checkHoisting(){
    console.log(a);  //undefined
}

var a=5;
//console.log(a);
checkHoisting();
*/

function checkHoistingLet(){
    console.log(a2);  //undefined
}
checkHoistingLet(); //reference error
let a2=5;
//console.log(a);




