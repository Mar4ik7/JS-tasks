/* // task1: Створіть масив arr = ['a', 'b', 'c']. Виведіть його на екран за допомогою функції alert.
let arr = ['a', 'b', 'c'];
alert(arr) */

/* // task2: За допомогою масиву arr із попереднього номера виведіть на екран вміст першого, другого та третього елементів.
let arr = ['a', 'b', 'c'];
alert(arr[0])
alert(arr[1])
alert(arr[2]) */

/* // task3: Створіть масив arr = ['a', 'b', 'c', 'd'] і за допомогою виведіть на екран рядок 'a+b, c+d'.
let arr = ['a', 'b', 'c', 'd']
alert(`${arr[0]}+${arr[1]}, ${arr[2]}+${arr[3]}`) */

/* // task4: Створіть масив arr з елементами 2, 5, 3, 9. Помножте перший елемент масиву на другий, а третій елемент на четвертий. Результати складіть, надайте змінній result. Виведіть на екран значення цієї змінної.
let arr = ['2', '5', '3', '9'];
let arr1 = arr[0] * arr[1];
let arr2 = arr[2] * arr[3];
let result = arr1 + arr2;
alert(result); */

/*  // task5: Створіть об'єкт obj. Виведіть на екран елемент із ключем 'c' двома способами: через квадратні дужки та як властивість об'єкта:
let obj = { a: 1, b: 2, c: 3 };
alert(obj['c']);
alert(obj.c);  */

/* // task6: Створіть масив заробітної плати obj. Виведіть на екран зарплату Петра та Миколи.
let obj = { Микола: '1000', Василь: '500', Петро: '200' };
alert(`${obj['Петро']}, ${obj['Микола']}`) */

/* // task7: Створіть об'єкт із днями тижня. Ключами в ньому повинні бути номери днів від початку тижня (понеділок - перший і т.д.). Виведіть поточний день тижня на екран.
let obj = { 1: 'Пн', 2: 'Вт', 3: 'Ср', 4: 'Чт', 5: 'Пт', 6: 'Сб', 7: 'Нд' };
alert(obj['1']); */

/* // task8: Нехай тепер номер дня тижня зберігається у змінній day, наприклад, там лежить число 3. Виведіть день тижня, що відповідає значенню змінної day.
let obj = { 1: 'Пн', 2: 'Вт', 3: 'Ср', 4: 'Чт', 5: 'Пт', 6: 'Сб', 7: 'Нд' };
let day = 1;
alert(obj[day]); */

/* // task9: Даний масив [[1, 2, 3], [4, 5, 6], [7,8,9]]. Виведіть на екран цифру 4 із цього масиву.
let arr = [[1, 2, 3], [4, 5, 6], [7,8,9]];
alert(arr[1] [0]);
 */

/* // task10: Даний об'єкт {js:['jQuery', 'Angular'], php: 'hello', css: 'world'}. Виведіть за його допомогою слово jQuery.
let obj =  {js:['jQuery', 'Angular'], php: 'hello', css: 'world'};
alert(obj.js[0]); */

/* // task11: Створіть двовимірний масив. Перші два ключі - це 'ua' та 'en'. Нехай перший ключ містить елемент, що є масивом назв днів тижня українською, а другий - англійською. Виведіть за допомогою цього масиву понеділок українською та середу англійською (нехай понеділок - це нульовий день).
let obj = {ua:['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Нд'], en: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']};
alert(`${obj['ua'][0]}, ${obj['en'][2]}`) */

/* // task12: Нехай тепер у змінній lang зберігається мова (вона приймає одне із значень або 'ru', або 'en' - або те, або те), а в змінній day - номер дня. Виведіть словом день тижня, що відповідає змінним lang та day. Тобто: якщо, наприклад, lang = 'ua' і day = 3 - то виведемо 'середа'.
let obj = {ua:['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Нд'], en: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']};
let lang = 'ua';
let day = 3;
alert(obj[lang][day]);
  */




