const row1 = document.querySelector(".row1");
const row2 = document.querySelector(".row2");
const row3 = document.querySelector(".row3");
const test = document.querySelector(".test");
function int() {
  setInterval(() => {
    let day = new Date();
    let second = (day.getSeconds() / 60) * 360;
    let minut = (day.getMinutes() / 60) * 360;
    let hour = day.getHours();
    if (hour <= 12) {
      hour = (hour / 12) * 360;
    } else {
      hour = (hour / 24) * 360;
    }
    row1.style.transform = ` rotate(${second}deg) translateX(40px)`;
    row2.style.transform = ` rotate(${minut}deg) translateX(35px)`;
    row3.style.transform = ` rotate(${hour}deg) translateX(25px)`;
  }, 1000);
}
int();
