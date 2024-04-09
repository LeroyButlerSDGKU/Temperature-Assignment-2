function convert() {
    // Get the temperature in Celsius from the input field
    var temperatureCelsius = parseFloat(document.getElementById("celsiusInput").value);

    // Convert Celsius to Fahrenheit using the formula: Fahrenheit = (Celsius * 9/5) + 32
    var temperatureFahrenheit = (temperatureCelsius * 9/5) + 32;

    // Display the converted temperature
    document.getElementById("result").innerText = "Temperature in Fahrenheit: " + temperatureFahrenheit;
}
