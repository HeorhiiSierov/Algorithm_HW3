function countOnesInBinary(number) {
  const binaryString = (number >>> 0).toString(2);
  const onesCount = binaryString
    .split("")
    .map((bit) => parseInt(bit))
    .reduce((acc, val) => acc + val, 0);
  return onesCount;
}

const a = 255;
const result = countOnesInBinary(a);

console.log(result);
