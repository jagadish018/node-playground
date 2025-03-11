/*import Calculator from "./calculator";

const calculator = new Calculator();
let a = 5;
let b = 2;
console.log(calculator.add(a, b));
console.log(calculator.subtract(a, b));
console.log(calculator.multiply(a, b));
console.log(calculator.divide(a, b));*/

import { ReminderDatabase } from "./ReminderDB";

const reminderDB = new ReminderDatabase();
reminderDB.createReminder("1", "Meeting", "Discuss project timeline", "2021-12-31");
reminderDB.createReminder("2", "Shopping", "Buy groceries", "2021-12-25");
reminderDB.createReminder("3", "Exercise", "Go for a run", "2021-12-30");
reminderDB.getAllReminders().forEach((reminder) => {
  console.log(reminder);
});
reminderDB.updateReminder("2", "Shopping", "Buy Christmas gifts", "2021-12-24");    
reminderDB.getAllReminders().forEach((reminder) => {
  console.log(reminder);
});
