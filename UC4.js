const IS_PART_TIME=1;
const IS_FULL_TIME=2;
const IS_PART_TIME_HOURS=4;
const IS_FULL_TIME_HOURS=8;
const WAGE_PER_HOURS=20;

// empHours=4;
const NUM_OF_WORKING_DAYS=2;
let empHours=0;
for(let day=0;day<NUM_OF_WORKING_DAYS;day++){
    let empCheck=Math.floor(Math.random()*10)%3;
    empHours=empHour+getWorkingHours(empCheck);
}
let empWage=empHours*WAGE_PER_HOURS;
console.log("Total Hours: "+empHours+"  Emp Wage : "+empWage);
