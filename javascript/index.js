const endDate= "26 March 2024 10:00 PM"
document.getElementById("end-date").innerText=endDate;
const inputs = document.querySelectorAll("input")

// const clock =()=>{}

function clock(){
  //the variable 'end' holds a Date object representing the date and time specified by endDate
  const end =new Date(endDate);
  const now =new Date(); //Holds Current date and time
  console.log(end);
  console.log(now);
  
  const diff =(end-now)/1000;
  //the obtained output is in millisecond soo it is converted into seconds by dividing 1000 since 1 sec = 1000 milisecond

  console.log(diff);

  if(diff<0) returns;
  //countdown calculation stops after the diff is negative

  //convert into days by dividing 3600 and by 24 
  inputs[0].value=Math.floor(diff/3600/24)
  //math.floor() rounds down the number 10.2 to 10 and 5.8 to 5, it is often used to remove decimal part and only keep the integer part

  //convert into hours
  //the obtained day is removed and from remaining 'seconds', the required hour is obtained; 
  inputs[1].value=(Math.floor(diff/3600)%24)

  //convert into minutes
  inputs[2].value=Math.floor(diff/60)%24;


  //convert into seconds
  inputs[3].value=Math.floor(diff%60);
}

//initial call
clock()

/*
1 day= 24 hrs
1 hr =60 min
60 min = 3600 sec 
*/

//calling a function 'clock' in every 1 second 
setInterval(clock,1000);