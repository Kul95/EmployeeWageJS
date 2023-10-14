// const IS_PART_TIME=1;
// const IS_FULL_TIME=2;
// const IS_PART_TIME_HOURS=4;
// const IS_FULL_TIME_HOURS=8;
const WAGE_PER_HOURS=20;

// empHours=4;

let empHours=0;
function calcDailyWage(){
    return empHours * WAGE_PER_HOURS;
}
const MAX_HOURS_IN_MONTH=160;
const NUM_OF_WORKING_DAYS=20;
let totalEmpHrs=0;
let totalWorkingDays=0;
let empDailyWageArr=new Array();
while(totalEmpHrs<=MAX_HOURS_IN_MONTH && totalWorkingDays<<NUM_OF_WORKING_DAYS){
    totalWorkingDays++;
    let empCheck=Math.floor(Math.random()*10)%3;
    let empHours=getWorkingHours(empCheck);
    totalEmpHrs=totalEmpHrs+empHours;
    empDailyWageArr.push(calcDailyWage(empHours));
}
let empWage=calcDailyWage(totalEmpHrs);
console.log("Total days: "+totalWorkingDays+" Total hours: "+totalEmpHrs+" Emp Wage: "+empWage);