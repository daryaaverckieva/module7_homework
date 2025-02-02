const printInfo = function (){
    console.log(`Name: ${this.name} Age: ${this.age} `)
};

const person = {
    name: 'Dan',
    age: 15,
};
printInfo.call(person)