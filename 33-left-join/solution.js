const one = {
  one: 'fish',
  two: 'duck',
  three: 'goose',
  four: 'chicken',
  five: 'beef',
};

const two = {
  one: 'purple',
  two: 'green',
  three: 'white',
  four: 'red',
  six: 'shrimp',
};

const leftJoin = (map1, map2) => {
  const newArray = []; // left join array

  /*eslint-disable*/
  let arrayMap2 = Object.keys(map2);  
  console.log(arrayMap2);
  for (var key in map1) {
    if(arrayMap2.indexOf(key) !== -1) {
     let concat = `${key}, ${map1[key]}, ${map2[key]}`;
     newArray.push(concat.split(' '));
    } else {
      newArray.push('Nopesidoodles this is not a match');
    }
  }

  return newArray
}

console.log(leftJoin(one, two));