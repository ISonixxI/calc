const display = document.getElementById("Display");

function appendToDisplay(input) {
  if (display.value == "Error") {
    display.value = "";
    display.value += input;
  } else {
    display.value += input;
  }
}

function clearDisplay() {
  display.value = "";
}

function calculate() {
  try {
    display.value = eval(display.value);
  } catch (error) {
    display.value = "Error";
  }
}
