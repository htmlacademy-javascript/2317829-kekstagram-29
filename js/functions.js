// 2.29. Нужно больше функций

// Задание №1
const stringLengt = (string, length) => string.length <= length;

stringLengt('проверяемая строка', 20);

// Задание №2
function checkPalindrome(string) {
  if (string && string.lenght === 0) {
    return true;
  }

  string = string.replace(/\s+/g, '').toLowerCase();

  return [...string].reverse().join('') === string;
}

checkPalindrome('Лёша на полке клопа нашёл ');

// 5.16. Функции возвращаются

const checkMeetingTime = (startWork, endWork, meetingStart, meetingDuration) => {
  const MINUTES_IN_HOUR = 60;

  // Функция для преобразования времени в минуты
  const getTimeInMinutes = (time) => {
    const [hours, minutes] = time.split(':').map(Number);
    return hours * MINUTES_IN_HOUR + minutes;
  };

  const startWorkTime = getTimeInMinutes(startWork);
  const endWorkTime = getTimeInMinutes(endWork);
  const meetingStartTime = getTimeInMinutes(meetingStart);
  const meetingEndTime = meetingStartTime + meetingDuration;

  return !(meetingStartTime < startWorkTime || meetingEndTime > endWorkTime || meetingEndTime > endWorkTime);
};

/* eslint-disable no-console */

// Проверка различных сценариев
console.log(checkMeetingTime('08:00', '17:30', '14:00', 90)); // true
console.log(checkMeetingTime('8:0', '10:0', '8:0', 120)); // true
console.log(checkMeetingTime('08:00', '14:30', '14:00', 90)); // false
console.log(checkMeetingTime('14:00', '17:30', '08:0', 90)); // false
console.log(checkMeetingTime('8:00', '17:30', '08:00', 900)); // false
