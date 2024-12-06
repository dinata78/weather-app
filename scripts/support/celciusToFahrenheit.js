export { celciusToFahrenheit };

function celciusToFahrenheit(temperature) {
  const temperatureInFahrenheit = temperature / 5 * 9 + 32;
  
  if (temperatureInFahrenheit % 1 !== 0) {
    return temperatureInFahrenheit.toFixed(1);
  }
  return temperatureInFahrenheit;

}