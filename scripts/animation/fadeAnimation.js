export { fadeAnimation };

import { toggleVisibility } from "../ui/toggleVisibility.js";

function fadeAnimation(type, func, ...params) {
  let animation = 
    (type === "day") ? toggleVisibility.dayInfo 
    : (type === "hour") ? toggleVisibility.hourInfo 
    : null;

  animation();
  setTimeout(() => {    
    func(...params);
    animation();
  }, 500);
}