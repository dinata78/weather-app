export { fadeAnimation };

import { toggleVisibility } from "../ui/toggleVisibility.js";

function fadeAnimation(type, duration_in_ms, func, ...params) {
  const root = document.querySelector(":root");
  root.style.setProperty("--fade-duration", duration_in_ms + "ms");

  let animation = 
    (type === "day") ? toggleVisibility.dayInfo 
    : (type === "hour") ? toggleVisibility.hourInfo 
    : null;

  animation();
  setTimeout(() => {    
    func(...params);
    animation();
  }, duration_in_ms);
}