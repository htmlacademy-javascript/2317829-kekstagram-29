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
