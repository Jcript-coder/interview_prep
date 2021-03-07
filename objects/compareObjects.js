//compare two objects
//objects are just references so we don't use the == and ===
//JSON.stringfy() method to check the key value pair

const k1 = { fruit: '🥝' };
const k2 = { fruit: '🥝' };

// Using JavaScript
console.log(JSON.stringify(k1) === JSON.stringify(k2)); // true

const obj1={
    id:1,
    blue:"ray",
    genre:"music"
}

const obj2={
    id:1,
    blue:"ray",
    genre:"red"
}

console.log(JSON.stringify(obj1)===JSON.stringify(obj2));
//_.isEqual(k1, k2);
//order matters for the comparison using JSON.stringify();

const obj3={
    id:1,
    blue:"ray",
    genre:"music"
}

const obj4={
    id:1,
    genre:"red",
    blue:"ray"
}

console.log(JSON.stringify(obj3)===JSON.stringify(obj4))//false//order matters

console.log(Object.entries(obj3).toString()===Object.entries(obj4).toString())//false

console.log(Object.entries(obj1).toString());
//===Object.entries(obj2).toString())
console.log(Object.entries(obj1))

