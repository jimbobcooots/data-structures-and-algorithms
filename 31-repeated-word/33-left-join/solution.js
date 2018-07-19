// input: two objects with arbritrary values and arbitrary number of properties
//output: matrix (multiple arrays) where each index is the key of the first object and values of the first and second objects

let one = {
  one: 'fish',
  two: 'duck',
  three: 'goose',
  four: 'chicken',
  five: 'beef',
};

let two = {
  one: 'purple',
  two: 'green',
  three: 'white',
  four: 'red',
  six: 'shrimp',
};



// console.log(Object.keys(one));

// console.log(Object.keys(two));

let leftJoin = (map1, map2) => {
  let newArray = []; // left join array

  let arrayMap1 = Object.keys(map1);  
  
  for (var key in map1) {
    console.log(map2.key);
  }

  
  return newArray
}

console.log(leftJoin(one, two));