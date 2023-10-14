const MAX_HOURS_IN_MONTH=160;
const NUM_OF_WORKING_DAYS=20;
let totalEmpHrs=0;
let totalWorkingDays=0;
let empDailyWageArr=new Array();
let empDailyWageMap=new Map();
function calcDailyWage(empHours){
    return empHours*WAGE_PER_HOURS;
}
while(totalEmpHrs<=MAX_HOURS_IN_MONTH && totalWorkingDays<NUM_OF_WORKING_DAYS){
    totalWorkingDays++;
    let empCheck=Math.floor(Math.random()*10)%3;
    let empHours=getWorkingHours(empCheck);
    totalEmpHrs=totalEmpHrs+empHours;
    empDailyWageArr.push(calcDailyWage(empHours));
    empDailyWageMap.set(totalWorkingDays,calcDailyWage(empHours));
}
console.log(empDailyWageMap);
function totalWage(totalWage,dailyWage){
    return totalWage+dailyWage;
}
console.log("Emp wage map totalHrs: "+Array.from(empDailyWageMap.values()).reduce(totalWage,0));

