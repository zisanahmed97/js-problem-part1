const biriyanikhor = ['abul','mokbul','chulbul','abul','bulbul','mokbul'];

function noDuplicate(array){
    const unique = [];
       for(const item of array){
        if(unique.includes(item)===false){
            unique.push(item);
        }
       }
       return unique;
}
const uniqueArray = noDuplicate(biriyanikhor);
console.log(uniqueArray)