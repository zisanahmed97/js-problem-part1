/**
 * simple rule:
 * year will be leap year if the year is divisible by 4
 */
function isLeapyear1(year){
    if(year % 4 === 0){
        return true;
    }else{
        return false;
    }
}

const isLipi = isLeapyear1(2023);
console.log(isLipi);


/**
 * those years that is not divisible by 100 and if the year is divisible by 4 then the year is leap year
 * 
 * those years that is divisible by 100 also divisible by 400 that is a leap year
 * 
 */

function isLeapyear2(year){
    if(year%100 !== 0 && year%4===0){
        return true;
    }else if(year % 100 === 0 && year % 400 ===0){
        return true;
    }else{
        return false;
    }
}
const leap1 = isLeapyear2(2021);
console.log(leap1);
const leap2 = isLeapyear2(2022);
console.log(leap2);
const leap3 = isLeapyear2(2023);
console.log(leap3);
const leap4 = isLeapyear2(2024);
console.log(leap4);





