function convertTemp() {
  const input = document.getElementById("tempInput").value;
  const unit = document.getElementById("unit").value;
  let result = "";

  if (isNaN(input)) {
    result = "Please enter a valid number";
  } else if (unit === "celsius") {
    result = `${(input * 9/5 + 32).toFixed(2)} °F`;
  } else if (unit === "fahrenheit") {
    result = `${((input - 32) * 5/9).toFixed(2)} °C`;
  }

  document.getElementById("result").innerText = result;
}
