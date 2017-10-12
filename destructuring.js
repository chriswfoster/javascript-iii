// ========================
// DESTRUCTURING
// ========================

// Use object destructuring to save the property values from the object carDetails into new variables. 

var carDetails = {
  color: 'red',
  make: 'toyota',
  model: 'tacoma',
  year: 1994
}

// CODE HERE
const {color, make, model, year} = carDetails

// ========================


// In the function below named greeting, it is receiving an object as a parameter. Use object destructuring to save the object properties to new variables. The property names are firstName, lastName, and title. Return the concatenated string.

function greeting( obj ) {

  
  return {firstName, lastName, title} = 'Hello, ' + obj.title + ' ' + obj.firstName + ' ' + obj.lastName + '!';
}


// ========================


// Write a function called totalPopulation that will take in an object. That object will have 4 properties named utah, california, texas and arizona. The property values will be numbers. Use object destructuring to save the property values to new variables. Sum up the values and return the total number.
function totalPopulation (obj){
 



return {utah, california, texas, arizona} = obj.utah + obj.california + obj.texas + obj.arizona; ;
}

// ========================


// Write a function called ingredients that will take in an object. This object will have 3 properties named carb, fat, and protein. The property values will be strings. Use object destructuring to save the property values to new variables. Push these new variables to an array and return the array. 

function ingredients(bingo){
 newArray = [];
  newArray.push({carb, fat, protein} = bingo.carb, bingo.fat, bingo.protein)
return newArray;
}


// ========================


// Now we will use object destructuring as the function's parameter instead of destructuring the object inside of the function declaration. See the example below:

// function example( {one, two, three} ) {
//   return one + two + three
// }

// Write a function called largeNumbers that will take a destructured object as it's parameter. The object properties will be named first, second, and third and their values will be numbers. Find the smallest number of the three and return that number.

function largeNumbers({first, second, third}){
var obj = {first, second, third}
if (obj.first > obj.second){
  return obj.second; 
}else if (obj.second > obj.third){
  return obj.third;
}else return obj.first;
}




// ========================


// Write a function called numberGroups that will take a destructured object as it's parameter. The object properties will be named a, b, and c and their values will be arrays of numbers. Find the longest array and return that array. 

  // CODE HERE
function numberGroups({a, b, c}){
al = a.length;
  bl = b.length;
  cl = c.length;

if (al < bl){
  return b; 
}else if (bl < cl){
  return c;
}else return a;

}