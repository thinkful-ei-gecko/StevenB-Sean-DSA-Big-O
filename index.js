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

towerOfHanoi(2, '1', '3', '2', 0);