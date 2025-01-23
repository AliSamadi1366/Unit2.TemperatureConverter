function convertToCelsius(temperature) {
  const celsius = ((temperature - 32) * 5) / 9;
  return celsius;
}
function describeTemperature(temperature) {
  const celsius = convertToCelsius(temperature);
  if (celsius < 0) {
    return "very cold";
  } else if (celsius < 20) {
    return "Cold";
  } else if (celsius < 30) {
    return "warm";
  } else if (celsius < 40) {
    return "Hot";
  } else {
    return "Very hot";
  }
}
const temperature = prompt("Enter the temperature in Fahrenheit: ");
alert(
  `The temperature in Celsius is ${convertToCelsius(
    temperature
  )} and it is ${describeTemperature(temperature)}`
);
