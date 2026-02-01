function inchToFeet(inch){
    const feet = inch/12;
    return feet;
}
const shuvoFeet = inchToFeet(75);
console.log(shuvoFeet);


function inchToFeet2(inch){
    const feetFraction = inch/12;
    const feetNumber = parseInt(feetFraction);
    const inchRemaining = inch % 12;
    const result = feetNumber + ' feet '+ inchRemaining+' inch ';
    return result;
}

const shuvoFeet2 = inchToFeet2(75);
console.log(shuvoFeet2);


function kmToMile(km){
    const mile = km * 0.621371;
    return mile;
}
const result = kmToMile(3);
console.log(result);