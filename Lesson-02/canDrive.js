const firstName = 'Flash';
const space = ' ';
const lastName = 'Gordon';
const affirmative = 'can drive';
let age = 35;
const drivingAge = 16;


if (age-drivingAge > 0) {
  console.log(`${firstName} ${lastName} is ${age}.`)
  console.log(`${firstName} ${lastName} ${affirmative} and has been driving for ${age-drivingAge} years.`);
}
else {
   for (i = 5; i >= 0; i--){
     console.log(i);
   }
}