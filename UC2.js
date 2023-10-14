const IS_PART_TIME=1;
const IS_FULL_TIME=2;
const IS_PART_TIME_HOURS=4;
const IS_FULL_TIME_HOURS=8;
const WAGE_PER_HOURS=20;
let empHours=0;
empHours=4;
let empCheck=Math.floor(Math.random()*10)%3;
switch(empCheck){
    case IS_PART_TIME:empHours=IS_PART_TIME_HOURS;
     break;
    case IS_FULL_TIME:empHours=IS_FULL_TIME_HOURS;
    break;
    default:empHours=0;
}
let empWage=empHours*WAGE_PER_HOURS;
console.log("Employee Wage: "+empWage);
