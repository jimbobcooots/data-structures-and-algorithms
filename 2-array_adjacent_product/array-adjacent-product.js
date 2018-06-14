let twoD = [
  [9, 2, 3],
  [3, 7, 6],
  [8, 4, 2],
  [5, 3, 9],
  [1, 5, 4],    
]
let findLargest = () => {
let productArr = [];
for (i = 0; i < twoD.length; i++);
  let row = twoD[i];
    for (j = 0; j < row.length; j++){
        let currNum = row[j];
        if (i + 1 >= twoD.length){
        }else{
          productArr.push(currNum * twoD[i + 1][j]);
          if (j + 1 >= twoD[j].length){
        }else{
          productArr.push(currNum * twoD[i][j + 1]);
          productArr.push(currNum * twoD[i + 1][j + 1]);
        }
        if (i - 1 < 0){
            
        }else{
          productArr.push(currNum * twoD[i - 1][j]);
          if(j + 1 >= twoD[j].length){
          }else{
          productArr.push(currNum * twoD[i - 1][j + 1]);
          }
          if (j - 1 < 0){
        }else{
          productArr.push(currNum * twoD[i][j - 1]);
          if(i + 1 >= twoD.length){
          }else{
          productArr.push(currNum * twoD[i + 1][j - 1]);
          }
        }
      }
      }
    };
};
console.log(Math.max(...productArr));
};
findLargest();