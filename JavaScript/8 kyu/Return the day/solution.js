// https://www.codewars.com/kata/59dd3ccdded72fc78b000b25

function whatday(num) {
  const days = { 
    1: "Sunday", 2: "Monday", 3: "Tuesday", 
    4: "Wednesday", 5: "Thursday", 6: "Friday", 
    7: "Saturday"
  } 
  return days[num] || "Wrong, please enter a number between 1 and 7";
}

function whatday(num) {
  if(num === 1) return "Sunday";
  else if(num === 2) return "Monday";
  else if(num === 3) return "Tuesday";
  else if(num === 4) return "Wednesday";
  else if(num === 5) return "Thursday";
  else if(num === 6) return "Friday";
  else if(num === 7) return "Saturday";
  else return "Wrong, please enter a number between 1 and 7";
}

const whatday = (num) => {
  const daysArr = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  return daysArr[num - 1] || "Wrong, please enter a number between 1 and 7";
}

function whatday(num) {
  switch(num) {
    case 1: return "Sunday";
    case 2: return "Monday";
    case 3: return "Tuesday";
    case 4: return "Wednesday";
    case 5: return "Thursday";
    case 6: return "Friday";
    case 7: return "Saturday";
    default: return "Wrong, please enter a number between 1 and 7";
  }
}