const Matrix = require("matrix-js");

let A = Matrix([
    [1,1,0,1,0],
    [1,0,1,0,0],
    [0,1,0,0,0],
    [1,0,0,0,1],
    [0,0,0,1,0]
]);
//Code here
function degree(mtrx,v)
{
  let sum = 0;
  let degreeList = mtrx(v-1);

  for(let i = 0; i < degreeList.length; i++)
  {
    sum += degreeList[i];
  }
  return sum;
}

function degreecentrality(mtrx, v)
{
  let neighbors = mtrx(v-1).length;
  let mtrxDegree = (degree(mtrx, v) / neighbors);
  return mtrxDegree;  
}

//Challenge
//degree(A, 1);
//Run test code with ctrl+shift+p  then type in "script"
//console.log(degree(A,4));
console.log(degreecentrality(A, 2));
