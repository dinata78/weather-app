export { translateDate };

function translateDate(dateInNum) { //translate time format from 'YY-MM-DD' to 'Month DD'
  const [ , month, date ] = dateInNum.split("-");
  const months = [
    "Jan", "Feb", "Mar", "Apr", 
    "May", "Jun", "Jul", "Aug", 
    "Sep", "Oct", "Nov", "Dec"
  ];
  
  return months[month - 1] + " " + date; 
}
