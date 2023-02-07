/* Problem1:Lets play a mind game.
   it's a simple Addition, Subtraction,Multiplying, and Division.
*/
// input:5
function mindGame(numbers){
const sumMultiplying = numbers * 3;
const sumAddition = sumMultiplying + 10;
const sumDivision =sumAddition / 2;
const totalResult = sumDivision - 5;
return totalResult;
}
const number = 5;
const totalNumbers = mindGame(number);
// problem1:close 
//--------------------------------------------- 

/*Problem 2: Finding even or odd.
syntax to use the if else statement and modulus operator
*/

// input:phero 
function evenOdd(string){
let indexOfString = string.length;
if(string.length % 2 == 0) {
    return `even`;
}
else {
    return `odd`;
}
}
const inputName = evenOdd(`Phero`);


        // problem2:close 
        // ----------------------------------

        /*Problem 3: Is Less or Greater than seven
        function name is not valid string “isLGSeven()”
         */
        function isLGSevens(text){
            return text;
        }
        const invalid = `“isLGSeven()” is not a valid string, Browser show SyntaxError`;
        const unexpected = isLGSevens(invalid);


        // if function name is valid string function isLGSeven(){} 
        // input:6
        function isLGSeven(numbers){
            let sum = numbers - 7;
            if(sum < 7){
                return sum;
            }
            else if(sum > 7){
                return numbers * 2;
            }
        }
        const inputNumber = 15;
        const result = isLGSeven(inputNumber);

        // problem3:close 
        // ----------------------------------

        /*Problem 4: Finding Bad data
        function to count positive and negative numbers in an array
        */ 

        // input:[1,2,5]
        function findingBadData(numbers, index, negativeCount) {
            if (index < numbers.length) {
                if (numbers[index] < 0) {
                    negativeCount++;
                }
                return findingBadData(numbers, index + 1, negativeCount);
            } else {
                return negativeCount;
            }
        }
        const numbers=[1,2,5];
        const negativeNumberCounts = findingBadData(numbers, 0, 0, 0);
        
        // problem4:close 
        //===========================================


        /*Problem 5: Convert your gems into diamond
        */ 

        // input: 1, 1, 1
       function gemsToDiamond(num1, num2, num3){
       const firstFriendGems = num1 * 21;
       const secondFriendGems = num2 * 32;
       const thirdFriendGems = num3 * 43;
       let totalDiamond = firstFriendGems + secondFriendGems + thirdFriendGems;
       if(totalDiamond > 1000*2){
        totalDiamond = totalDiamond - 2000;
       }
       return totalDiamond;
       }
       const perDiamond = gemsToDiamond(1, 1, 1);
    // ====================end=====================