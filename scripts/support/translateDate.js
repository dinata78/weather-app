export { translateDate };

function translateDate(dateInNum) { //translate time format from 'YY-MM-DD' to 'Month DD'
  const [ , month, date ] = dateInNum.split("-");
  const months = [
    "January", "February", "March", "April", 
    "May", "June", "July", "August", 
    "September", "October", "November", "December"
  ];
  
  return months[month - 1] + " " + date; 
}
