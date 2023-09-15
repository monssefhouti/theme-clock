const hourEl = document.querySelector(".hour");
const minuteEl = document.querySelector(".minute");
const secondEl = document.querySelector(".second");
const btnDark = document.querySelector(".toggle");
const timeText = document.querySelector(".time");
const dateText = document.querySelector(".date");
const circleText = document.querySelector(".circle");

const days = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];
const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sept",
  "Oct",
  "Nov",
  "Dec",
];
//#region BtnDark Toggle
btnDark.addEventListener("click", (e) => {
  const html = document.querySelector("html");
  if (html.classList.contains("dark")) {
    html.classList.remove("dark");
    e.target.innerHTML = "Dark Mode";
    e.target.style.backgroundColor = "black";
    hourEl.style.backgroundColor="black";
    minuteEl.style.backgroundColor="black";
  } else {
    html.classList.add("dark");
    e.target.innerHTML = "Light Mode";
    e.target.style.backgroundColor = "white";
    hourEl.style.backgroundColor="white";
    minuteEl.style.backgroundColor="white";
  }
});
//#endregion
const scale=(num,in_min,in_max,out_min,out_max)=>{
  return (num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
}
const setTime = () => {
  const time = new Date();
  const month = time.getMonth();
  const day = time.getDay();
  const year = time.getFullYear();
  const hours=time.getHours();
  const todayDate= time.getDate();
  const seconds=time.getSeconds();
  const minutes=time.getMinutes();
  const hoursForClock=hours %12;
  const timeType=hours>= 12 ? "PM" :"AM";
  hourEl.style.transform=`translate(-50%, -100%) rotate(${scale(hoursForClock,0,11,0,360)}deg)`;
  minuteEl.style.transform=`translate(-50%, -100%) rotate(${scale(minutes,0,59,0,360)}deg)`;
  secondEl.style.transform=`translate(-50%, -100%) rotate(${scale(seconds,0,59,0,360)}deg)`;

  timeText.innerHTML=`${hoursForClock}:${minutes <10 ?`0${minutes}`:minutes}  ${timeType}`;
  const todayDateText=circleText.textContent=`${todayDate}`;
  dateText.innerHTML = `${days[day]}, ${months[month]} <span class="circle">${todayDate} ${todayDate === 1 ? "st" : todayDate === 2 ? "nd" : todayDate === 3 ? "rd" : "th"}</span>, ${year}`;

};

setTime();
setInterval(setTime,1000);

