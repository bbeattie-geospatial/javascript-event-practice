const decreasebtn = document.getElementById("decrease");
const increasebtn = document.getElementById("increase");
const resetbtn = document.getElementById("reset");
const showlogsbtn = document.getElementById("showlogs");
const inputbox = document.getElementById("inputbox");
const logscontainer = document.getElementById("logsContainer");

let initialvalue = 0;
const resetvalue = 0;
let logs = [];

decreasebtn.addEventListener("click", () => {
  if (inputbox.value > 0) {
    let oldValue = initialvalue;
    initialvalue = initialvalue - 1;
    inputbox.value = initialvalue;
    logs.push(
      "User has decreased the value " + oldValue + " to " + initialvalue
    );
    console.log(logs);
  }
});

increasebtn.addEventListener("click", () => {
  initialvalue = initialvalue + 1;
  inputbox.value = initialvalue;
});

resetbtn.addEventListener("click", () => {
  initialvalue = 0;
  inputbox.value = initialvalue;
});

inputbox.addEventListener("change", (e) => {
  if (e.target.value < 0) {
    initialvalue = 0;
    inputbox.value = initialvalue;
  } else {
    initialvalue = parseInt(e.target.value);
  }
});

showlogsbtn.addEventListener("click", () => {
  for (let log in logs) {
    console.log((logscontainer.innerHTML = log));
  }
});
