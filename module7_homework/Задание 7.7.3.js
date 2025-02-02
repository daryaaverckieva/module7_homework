const users = [
    { name: 'Dan', age: 22 },
    { name: 'Maria', age: 17 },
    { name: 'Bob', age: 19 },
];

const adults = users.filter(user => user.age >= 18);


const names = adults.map(user => user.name);

console.log(adults); 
console.log(names); 