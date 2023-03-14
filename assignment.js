// Problem 1 : The name of this function is mindGame, This will take any number as input and multiply it with 3 then add 10 then divide with 2 and finally subtract 5 from the number and return the output**///
function mindGame(number){
    if( typeof number !== 'number'){
        return 'please enter a valid number'
    }
   
    const multiply= number *3 ;
    const addition=multiply + 10;
    const division = addition / 2;
    const output = division - 5;
    return output;
}

// Problem 2: the name of the function is evenOdd, this function detects the length of a string and determine even/odd .

function evenOdd(inputString) {
    if( typeof inputString !== 'string'){
        return 'please enter a valid string'
    }
    let char=inputString.length;
    if (char % 2 === 0) {
        return 'even';

    }
    else{
        return 'odd';
    }
}
// Problem 3 :Name of the function is isLGSeven(); this will take an input, this function will find out the difference between input and 7 ,if the difference is less than 7 it will return the difference, or it will return twice the value of input.
function isLGSeven(number){
    if( typeof number !== 'number'){
        return 'please enter a valid number';
    }
    difference= number-7;
    if( difference < 7){
        return difference;
    }
    else{
        return number*2;
    }
}

// Problem 4:This function is to find bad data named findingBadData(); this will take an array as input. it will consider negative value as bad data, and will show us how many bad data is there in our array.
function findingBadData(array) {
    if (Array.isArray(array) !==true){
        return 'please enter a valid array'
    }
    let count = 0;
     for (let i = 0; i < array.length; i++) {
       if (array[i] < 0) {
         count++;
       }
     }
     return count;
     
   } 
 

// problem 5: this function will take 3 numbers ars input and it will multiply 21,32,43 respectively with num1,num2,num3 and will provide the sum if the sum is less than 1000*2 or it will subtract 2000 from the sum and return the value.
function gemsToDiamond(num1, num2, num3) {
    if(typeof num1 !=='number' || typeof num2 !== 'number' || typeof num3 !=='number'){
        return 'enter a valid number'
    }
    const firstFriendGemPower = num1 * 21;
    const secondFriendGemPower = num2 * 32;
    const thirdFriendGemPower = num3 * 43;
    sum = firstFriendGemPower + secondFriendGemPower +thirdFriendGemPower;
    if( sum > 1000*2){
        return sum-2000;
    }
    else{
        return sum;
    }
}
