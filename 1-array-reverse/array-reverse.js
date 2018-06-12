let reverseArray = array => {
  let reversed = [];
  for(let i = array.length - 1; i >= 0; i--) {
    let num = array[i];
    reversed.push(num);
  }

  return reversed;
}