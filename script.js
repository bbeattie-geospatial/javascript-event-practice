const decreasebtn = document.getElementById("decrease");
const increasebtn = document.getElementById("increase");
const resetbtn = document.getElementById("reset");
const showlogsbtn = document.getElementById("showlogs");
const inputbox = document.getElementById("inputbox");
let initialvalue = 0;
const resetvalue = 0;

decreasebtn.addEventListener("click", () => {
  if (inputbox.value > 0) {
    initialvalue = initialvalue - 1;
    inputbox.value = initialvalue;
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
  }
});
