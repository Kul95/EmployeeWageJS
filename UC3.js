const IS_PART_TIME=1;
const IS_FULL_TIME=2;
const IS_PART_TIME_HOURS=4;
const IS_FULL_TIME_HOURS=8;
const WAGE_PER_HOURS=20;
let empHour=0;
// empHours=4;
function getWorkingHours(empCheck){
switch(empCheck){
    case IS_PART_TIME:
        return IS_PART_TIME_HOURS;
        case IS_FULL_TIME:
            return IS_FULL_TIME_HOURS;
            default: return 0;
}
}
let empHours=0;
let empCheck=Math.floor(Math.random()*10)%3;
empHours=getWorkingHours(empCheck);
let empWage=empHours*WAGE_PER_HOURS;
console.log("Employee Wage: "+empWage);
