let days=document.getElementById("days");
let hours=document.getElementById("hours");
let minutes=document.getElementById("minutes");
let seconds=document.getElementById("seconds");
let newYear=document.getElementById("newYear");

let a =setInterval(function result() {    

let date =new Date();
console.log(date);
let newdate =new Date('wed Jan 1 2025')
console.log(newdate)
let finalDate =newdate-date;
console.log(finalDate);

const daysFinal = Math.floor(finalDate / (1000 * 60 * 60 * 24));
days.innerHTML=`${daysFinal} Days`;
console.log(daysFinal)


const hoursFinal = Math.floor((finalDate % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
hours.innerHTML=`${hoursFinal} Hours`;
console.log(hoursFinal);


const minutesFinal = Math.floor((finalDate % (1000 * 60 * 60)) / (1000 * 60));
minutes.innerHTML=`${minutesFinal} Minutes` ;
console.log(minutesFinal);


const secondsFinal = Math.floor((finalDate % (1000 * 60)) / 1000);
seconds.innerHTML=`${secondsFinal} Seconds`;
console.log(secondsFinal);

if(newdate < date){
    clearInterval(a);
    days.innerHTML= "";
    hours.innerHTML= "";
    minutes.innerHTML= "" ;
    seconds.innerHTML="";
    newYear.innerHTML="Happy New Year 2025 ";
}

},1000)









