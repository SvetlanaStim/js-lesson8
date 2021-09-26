'use strict';
/*
1. Написать функцию, которая принимает 2 строки и сравнивает их длину. Функция возвращает 1, если в первой
строке больше символов, чем во второй; -1 – если во второй больше символов, чем в первой; или 0 – если строки
одинаковой длины.
*/
let compareLength = (str1, str2) => {
  if (str1.length > str2.length) return 1
  else if (str1.length === str2.length) return 0
  else return -1;
}
let userString1 = 'макароны';
let userString2 = 'картошка';
document.getElementById('f1').innerHTML = compareLength(userString1, userString2);
/*
2. Написать функцию, которая переводит в верхний регистр
первый символ переданной строки.
*/
let userString3 = 'сорока';
let changeRegistr = (str) => {
  return str[0].toUpperCase() + str.slice(1);
}
document.getElementById('f2').innerHTML = changeRegistr(userString3);
/*
3. Написать функцию, которая считает количество гласных
букв в переданной строке.
*/
let countVowel = (str) => {
  let counter = 0;
  for (let i = 0; i < str.length; i++) {
    if ('аеёиоуыэюя'.includes(str[i].toLowerCase())) counter++;
  }
  return counter;
}
let userString4 = 'коловорот';
document.getElementById('f3').innerHTML = `В строке ${userString1} ${countVowel(userString1)} гласных букв`;

/*
4. Написать функцию для проверки спама в переданной
строке. Функция возвращает true, если строка содержит
спам. Спамом считать следующие слова: 100% бесплатно,
увеличение продаж, только сегодня, не удаляйте, ххх.
Функция должна быть нечувствительна к регистру.
*/
let isSpam = (str) => {
  let lowerStr = str.toLowerCase();
  let spamArray = ['100% бесплатно', 'увеличение продаж', 'только сегодня', 'не удаляйте', 'xxx', 'ххх'];
  let spamFlag = false;
  for (let i = 0; i < 5; i++)
    if (lowerStr.includes(spamArray[i])) {
      spamFlag = true;
      break;
    };
  return spamFlag;
}
let userString5 = 'пожалуйста, не нужно удалять этот файл';
document.getElementById('f4').innerHTML = isSpam(userString5) && 'Спам!' || 'Спама нет';

/*
5. Написать функцию сокращения строки. Функция принимает строку и ее максимальную длину. Если длина строки
больше, чем максимальная, то необходимо отбросить
лишние символы, добавив вместо них троеточие.
Например: truncate(“Hello, world!”, 8) должна вернуть
“Hello...”.
*/
let truncate = (str, maxLength) => {
  return str.length > maxLength ? str.slice(0, maxLength - 3) + '...' : str;
}
let userString6 = 'Мама мыла раму';
let num = 10;
document.getElementById('f5').innerHTML = truncate(userString6, num);

/*
6. Написать функцию, которая проверяет, является ли переданная строка палиндромом.
*/
let isPalindrome = (str) => {
  let strReverse = str.split('').reverse().join('').toLowerCase();
  return strReverse == str.toLowerCase() ? true : false;
}
let testString = 'абвгдгвба';
document.getElementById('f6').innerHTML = `строка ${testString} 
${isPalindrome(testString) && 'является полиндромом' || 'не является полиндромом'}`;

/*
7. Написать функцию, которая считает количество слов в предложении.
*/
let countWords = (str) => {
  let punctRE = /[\u2000-\u206F\u2E00-\u2E7F\\'!"#$%&()*+,\-.\/:;<=>?@\[\]^_`{|}~\s]+/g;
  /* Здесь внутри слешей оформляется регулярное выражение. 
  /g в конце - множественный поиск, без него найдёт только первое въхождение. 
  В квадратных скобках указываются возможные символы, 
  где
    \u2000-\u206F - основная пунктуация, \u2E00-\u2E7F - дополнительная пунктуация,
    спецсимволы регулярных выражений экранируются слешем \
    \s - это пробел.
  Плюс после квадратных скобок одначает "один или более", 
  т.е. любой символ из квадратных скобок может повториться 1 и более раз  */
  return str.replace(punctRE, ' ').split(' ').length;
}
let testString2 = prompt('Введите строку');
document.getElementById('f7').innerHTML = `в строке '${testString2}' ${countWords(testString2)} слов`;

/*
8. Написать функцию, которая возвращает самое длинное
слово из предложения.
*/
let findLongestWord = (str) => {
  let punctRE = /[\u2000-\u206F\u2E00-\u2E7F\\'!"#$%&()*+,\-.\/:;<=>?@\[\]^_`{|}~\s]+/g;
  let nStr = str.replace(punctRE, ' ').split(' ').reduce((a, b) => (b.length > a.length) ? b : a);

  return nStr;
};
let testString3 = prompt('Введите строку');
document.getElementById('f8').innerHTML = `в строке '${testString3}' самое длинное слово - это '${findLongestWord (testString3)}'`;
/*
9. Написать функцию, которая считает среднюю длину слова в предложении.
*/
let getAverageLength = (str) => {
  let punctRE = /[\u2000-\u206F\u2E00-\u2E7F\\'!"#$%&()*+,\-.\/:;<=>?@\[\]^_`{|}~\s]+/g;
  let strArray = str.replace(punctRE, ' ').split(' ');
  let a = strArray.map(item => item.length).reduce((sum, item) => sum + item, 0) / strArray.length;

  return a;
};
let testString4 = 'dfgdfg dshsgh fffg fdsdfdd nm';
document.getElementById('f9').innerHTML = `в строке '${testString4}' средняя длина слова ${getAverageLength(testString4)}`;

/*
10. Написать функцию, которая принимает строку и символ
и выводит индексы, по которым находится этот символ в
строке. Также вывести, сколько всего раз встречается этот
символ в строке. */

const getSymbolPosition = (str, symbol) => {
  let pos = -1; 
  let posString = '';
  let rezultString = {
        positions: '',
        count: 0,
      };
  while ((pos = str.indexOf(symbol, pos + 1)) != -1) {
    posString += pos + ', ';
    rezultString.count++;
  }
  // rezultString.positions = posString.slice(0,-2) || ''; // можно так, а можно через регулярные выражения:
  rezultString.positions = posString.replace(/,\s$/, '');
  return rezultString;
}
let testString5 = '123445673477';
let testSymbol = '4';
let positionsSymbol = getSymbolPosition(testString5, testSymbol);
document.getElementById('f10').innerHTML = `в строке '${testString5}' символ ${testSymbol} встречается 
${positionsSymbol.count == 0 ? positionsSymbol.count + ' раз' : positionsSymbol.count + ' раз на позициях ' + positionsSymbol.positions}`;
