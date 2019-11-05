let moves = 0;
const towerOfHanoi = (discs, startPeg, endPeg, middlePeg) => {
  if (discs >= 1) {
    towerOfHanoi(discs - 1, startPeg, middlePeg, endPeg);
    moves++;
    console.log(`Moved a disc from ${startPeg} to ${endPeg}: step number ${moves}`);
    towerOfHanoi(discs - 1, middlePeg, endPeg, startPeg);
  }
  return;
};

//towerOfHanoi(7, '1', '3', '2', 0);

// solving recursive problems 1-7 iteratively

// 1.

const sheepCounter = (numOfSheep) => {
  for(let i = numOfSheep; i >= 1; i--) 
    console.log(`${i}: Another sheep jumps over the fence`);

  console.log('All the sheep jumped over the fence');
};

//sheepCounter(3);

// 2.

const powerCalculator = (base, exponent) => {
  if (exponent < 0)
    return 'exponent should be >= 0';
  return base ** (exponent);
};

//console.log(powerCalculator(10,2));
//console.log(powerCalculator(10,-2));


// 3.

const reverseString = (string) => {
  const newString = [];
  for (let i = string.length - 1; i >= 0; i--) {
    newString.push(string[i]);
  }
  return newString.join('');
};

// console.log(reverseString('elephant'));

// 4.

const triangleNum = (n) => {
  return (n * (n + 1)) /2;
};

/* console.log(triangleNum(1));
console.log(triangleNum(2));
console.log(triangleNum(3));
console.log(triangleNum(4));
console.log(triangleNum(5));
console.log(triangleNum(6));
console.log(triangleNum(7)); */


// 5.
const strSplitter = () => {

};

// 6.

const fib = (n) => {
  let arr = [0, 1];

  for (let i = 2; i < n + 1; i++)
    arr.push(arr[i-2] + arr[i - 1]);

  return arr;
};

console.log(fib(7));