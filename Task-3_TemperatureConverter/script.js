function convertTemperature() {
    const input = parseFloat(document.getElementById("tempInput").value);
    const from = document.getElementById("fromUnit").value;
    const to = document.getElementById("toUnit").value;
    let resultText = "";

    if (isNaN(input)) {
        resultText = "❌ Please enter a valid number";
    } else {
        let tempInCelsius;

        // Convert input to Celsius first
        switch (from) {
            case "celsius":
                tempInCelsius = input;
                break;
            case "fahrenheit":
                tempInCelsius = (input - 32) * 5 / 9;
                break;
            case "kelvin":
                tempInCelsius = input - 273.15;
                break;
        }

        let finalTemp;

        // Convert Celsius to target unit
        switch (to) {
            case "celsius":
                finalTemp = tempInCelsius;
                resultText = `${finalTemp.toFixed(2)} °C`;
                break;
            case "fahrenheit":
                finalTemp = (tempInCelsius * 9 / 5) + 32;
                resultText = `${finalTemp.toFixed(2)} °F`;
                break;
            case "kelvin":
                finalTemp = tempInCelsius + 273.15;
                resultText = `${finalTemp.toFixed(2)} K`;
                break;
        }
    }

    document.getElementById("result").textContent = resultText;
}
