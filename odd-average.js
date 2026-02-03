function oddAverage(nums){
    const odds = [];
for(const num of nums ){
    if(num %2 === 1){
       odds.push(num);  
    }
}
let sum = 0;
for(const num of odds){
     sum = sum + num;
}
  const count = odds.length;
  console.log(sum,count);
  const avg = sum / count;
  return avg;


}

const nums = [23,56,34,21,89];
const avg = oddAverage(nums);
console.log(avg);
