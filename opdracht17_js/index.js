function weirdSquares1(num1, num2){
    const sq1 = num1 * num1;
    const sq2 = num2 * num2;
    const totalOf2Squares = sq1+sq2;
    const result = totalOf2Squares * totalOf2Squares;
    return result
}

console.log(weirdSquares1(2,1))

const weirdSquares2 = function(num1, num2){
    const sq1 = num1 * num1;
    const sq2 = num2 * num2;
    const totalOf2Squares = sq1+sq2;
    const result = totalOf2Squares * totalOf2Squares;
    return result
}
console.log(weirdSquares2(2,1))

weirdSquares3 = (num1, num2) => {
const sq1 = num1 * num1;
const sq2 = num2 * num2;
const totalOf2Squares = sq1+sq2;
const result = totalOf2Squares * totalOf2Squares;
return result}

console.log(weirdSquares3(2,1))
