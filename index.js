let ClockElement = document.getElementById("ClockElement");
let DateElement = document.getElementById("DateElement");

// show the current day, month and year we are in
let updateDate = function () {
  const date = new Date();

  date.toDateString();

  DateElement.textContent = date.toDateString();
};

//calling/invoking the function
updateDate();

// function Expression to display the current time
let updateTime = function () {
  const date = new Date();
  const hour = date.getHours();
  //String.padStart() method to ensure that the minutes are always displayed as two digits
  const min = date.getMinutes().toString().padStart(2, "0");
  const Sec = date.getSeconds().toString().padStart(2, "0");

  if (hour < 12) {
    ClockElement.textContent = hour + ":" + min + ":" + Sec + "AM";
  } else if (hour >= 12) {
    ClockElement.textContent = hour + ":" + min + ":" + Sec + " PM";
  }
};

// calling the update time function clock
updateTime();
setInterval(updateTime, 1000);
