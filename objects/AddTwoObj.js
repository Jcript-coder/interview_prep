let person = {
    firstName: 'John',
    lastName: 'Doe',
    age: 25,
    ssn: '123-456-2356'
};


let job = {
    jobTitle: 'JavaScript Developer',
    location: 'USA'
};

let employee={
    ...person,
    ...job
}

console.log(employee);

const output=Object.assign({},person,job);
console.log(output);