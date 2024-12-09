export { celciusToFahrenheit };

function celciusToFahrenheit(temperature) { //convert temperature value in celcius to temperature value in fahrenheit
  const temperatureInFahrenheit = temperature / 5 * 9 + 32;
  
  if (temperatureInFahrenheit % 1 !== 0) { //limit floating point when number is a float
    return temperatureInFahrenheit.toFixed(1);
  }
  return temperatureInFahrenheit;

}