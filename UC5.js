const MAX_HOURS_IN_MONTH=100;
const NUM_OF_WORKING_DAYS=10;
let totalEmpHrs=0;
let totalWorkingDays=0;
while(totalEmpHrs<=MAX_HOURS_IN_MONTH && totalWorkingDays<NUM_OF_WORKING_DAYS){
    totalWorkingDays++;
    let empCheck=Math.floor(Math.random()*10)%3;
    totalEmpHrs += getWorkingHours(empCheck);
}
let empWage=totalEmpHrs*WAGE_PER_HOURS;
console.log("Total days: "+totalWorkingDays+" Total hours: "+totalEmpHrs+" Emp Wage: "+empWage);
