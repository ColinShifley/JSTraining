// Objects
// Primitive Value is a value that has no properties or methods
// String(*), Number(*), Boolean(*), Null, Undefined
// (*) - If defined with the new keyword

var person = {firstName:'John', lastName:'Deere', age:'50', eyeColor:'Green'}

// Exercises #1
//Write the code, one line for each action:
//
//  1. Create an empty object user.
var user = {};
//  2. Add the property name with the value John.
user.name = 'John';
//  3. Add the property surname with the value Smith.
user.lastName = 'Smith';
//  4. Change the value of the name to Pete.
user.name = 'Pete';
//  5. Remove the property name from the object.
delete user.name

console.log(user)


let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
}

// For In Loop cycles through all keys in an object
let salarySum = (x) => {
    let y = 0
    for ( let key in x ) {
      y += x[key];
    }
    return y;
}



console.log('Salaries: ', salarySum(salaries));


// You can access Objects in 2 ways: objectName.porpertyName, objectName[propertyName]
user.name
user[name]

