//what is an object:
//{}
//data-structure for storing the data which in defined in terms of key-value pairs


//different methods to create an object:
 var obj1=Object.create(null);

 console.log(obj1);

 var obj2=new Object();
    obj2.id=1;
    obj2.somePrint="nothing";

 console.log(obj2);

 var x=obj2;
 console.log(x);
 x.id=2;
 console.log(x);
 console.log(obj2);//value is modified ,since they are stored by reference

//creating objects with object literal

var car={
        wheels:4,
        company:"maaruti"
}

console.log(car);


//using es6 classes

class vehicle {
    constructor(name,maker,engine){
        this.name=name,
        this.maker=maker,
        this.engine=engine
    }
}

let car1=new vehicle("djlfal","fajflaf","fjadfnkajf");
console.log(car1);
console.log(car1.name)


//what are constructors in JS
//A constructor is a function that creates an instance of the class which is typically called an object
//In JS, a constructor gets called when you declare an object with the new keyword

//so what happens in the background
//when the constructor is invoked 
//1.New object is created
//2.this keyword starts reffering to the newly created object and it becomes the current instance object
//3.the newly created object is returned as the constructors returned value

//In javascript , if you don't specify constructor a default constructor is created with no parameters

/*

constructor(){

}
*/
