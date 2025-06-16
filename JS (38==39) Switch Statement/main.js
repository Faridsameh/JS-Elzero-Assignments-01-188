// Appointment Schedular program

let day = prompt("Please write here the preferred day:");
day = day.trim();
day = day.charAt(0).toUpperCase() + day.slice(1);

switch (day) {
  case "Friday":
  case "Saturday":
  case "Sunday":
    console.log("No Appointments Available");
    document.write("No Appointments Available");
    break;
    
  case "Monday":
  case "Thursday":
    console.log("From 10:00 AM To 5:00 PM");
    document.write("From 10:00 AM To 5:00 PM");
    break;

  case "Tuesday":
    console.log("From 02:00 AM To 6:00 PM");
    document.write("From 02:00 AM To 6:00 PM");
    break;

  case "Wednesday":
    console.log("From 14:00 AM To 7:00 PM");
    document.write("From 14:00 AM To 7:00 PM");
    break;
  default:
    console.log("It's Not A Valid Day");
    document.write("It's Not A Valid Day");
}
