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
  oldValue = initialvalue;
  initialvalue = initialvalue + 1;
  inputbox.value = initialvalue;
  logs.push("User has increased the value " + oldValue + " to " + initialvalue);
});

resetbtn.addEventListener("click", () => {
  initialvalue = 0;
  inputbox.value = initialvalue;
  logs.push("User has initiated a rest");
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
  logscontainer.innerHTML = ""; // Clear previous logs
  for (let log of logs) {
    logscontainer.innerHTML += log + "<br>"; // Append each log
    console.log(log);
  }
});
