const daysE1 = document.getElementById('days');
const hoursE1 = document.getElementById('hours');
const minutesE1 = document.getElementById('mins');
const secondsE1 = document.getElementById('seconds');

const todaysDateForMath = new Date();//place holder with todays date and used it to calculate the 66 days
const mathForHabitDate = todaysDateForMath.setDate(todaysDateForMath.getDate()+66); //adding 66 days in milliseconds

function countdown(){
    const habitDate = new Date(mathForHabitDate);//get end date
    const currentDate = new Date();//get todays date
   // console.log(currentDate); 
   // console.log(todaysDateForMath);
    //console.log(mathForHabitDate);
    //console.log(habitDate);

    const totalSeconds = (habitDate - currentDate)/1000;//1 second equals 1000 milliseconds
    //console.log(totalSeconds);
    const days = Math.floor(totalSeconds/3600/24);
    const hours = Math.floor(totalSeconds/3600) % 24;
    const minutes = Math.floor(totalSeconds/60)% 60;
    const seconds= Math.floor(totalSeconds) %60;
    
    console.log(days,hours, minutes, seconds);

    daysE1.innerHTML = days + ":";
    hoursE1.innerHTML = hours + ":";
    minutesE1.innerHTML = minutes + ":";
    secondsE1.innerHTML = seconds;

};

countdown();//calling for milliseconds

setInterval(countdown,1000);//calling countdown with every second
