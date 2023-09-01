// Завдання 1
// Напиши функцію logItems(array), яка отримує масив і використовує цикл for,
// який для кожного елемента масиву буде виводити в консоль повідомлення в форматі [номер елемента] - [значення елемента].
// Нумерація повинна починатися з 1. Наприклад,
// для першого елемента масиву ['Mango', 'Poly', 'Ajax'] з індексом 0 буде виведено '1 - Mango', а для індексу 2 виведе '3 - Ajax'.

function logItems(...array) {
    for (let index = 0; index < array.length; index++) {
        let arrayFor = array[index];
        arrayFor = `${index + 1} => ${arrayFor}`;
        console.log(arrayFor);
    };
};
logItems('Mango', 'Ajax', 'Poly');

// Завдання 2
// Напиши скрипт підрахунку вартості гравіювання прикрас. Для цього створи функцію calculateEngravingPrice(message, pricePerWord) приймаючу
// рядок (в рядку будуть тільки слова і прогалини) і ціну гравіювання одного слова, і повертає ціну гравіювання всіх слів в рядку.

let price = 0;
function calculateEngravingPrice(message, pricePerWord) {
    const array1 = message.split(' ');
    price = array1.length * pricePerWord;
    return price;
};
console.log(calculateEngravingPrice('dasdas dasdasda dsdasa dsadasad dasdasa dasadsda', 15));

// Завдання 3
// Напиши функцію findLongestWord(string), яка приймає параметром довільний
// рядок (в рядку будуть тільки слова і прогалини) і повертає найдовше слово в цьому рядку.

function findLongestWord(string) {
    const array2 = string.split(' ');
    let longestWord = '';
    for (const elementOfWord of array2) {
        if (elementOfWord.length > longestWord.length) {
            longestWord = elementOfWord;
        };
    };
    return longestWord
};
console.log(findLongestWord('sadsa adsaas bicycle dsds sdas dsada'));

// Завдання 4
// Напиши функцію formatString(string) яка приймає рядок і форматує його якщо необхідно.

// Якщо довжина рядка не перевищує 40 символів, функція повертає її в початковому вигляді.

// Якщо довжина більше 40 символів, то функція обрізає рядок до 40-ка
// символів і додає в кінець рядка три крапки '...', після чого повертає укорочену версію.

function formatString(string) {
    const formatStringArray = string.split('');
    if (string.length > 40) {
        const arraySlice = formatStringArray.slice(0, 39);
        arraySlice.push('...');
        return arraySlice.join('');
    };
    return string
};
console.log('dsfdsfsdfs');

// Завдання 5
// Напиши функцію checkForSpam(message), приймаючу 1 параметр message — рядок.
// Функція перевіряє її на вміст слів spam і sale. Якщо знайшли 
// заборонене слово,  то функція повертає true, якщо заборонених слів
// немає функція повертає false. Слова в рядку можуть бути в довільному регістрі.

function checkForSpam(message) {
    if (message.includes('spam')) {
        return true
    }
    if (message.includes('sale')) {
        return true
    }
    return false
}

// Завдання 6
// Напиши скрипт з наступним функціоналом:

// При завантаженні сторінки користувачеві пропонується в prompt ввести число.
// Введення зберігається в змінну input і додається в масив чисел numbers.

// Операція введення числа користувачем і збереження в масив триває до тих пор,
// пір, поки користувач не натисне Cancel в prompt.

// Після того як користувач припинив введення натиснувши Cancel,
// якщо масив не порожній, необхідно порахувати суму всіх елементів масиву і
// записати її в змінну total. Використовуй цикл for або for...of. Після чого
// в консоль виведи рядок 'Загальна сума чисел дорівнює [сума]'.

let input;
let numbers = [];
let total = 0;
function arrayOfNumbers() {
    do {
        var promptNumber = prompt('Введіть число')
        input = Number(promptNumber)
        console.log(input);
        if (input) {
            numbers.push(input)
            console.log(numbers);
        }
        if (Number.isNaN(input)) {
            alert('Масив порожній, спробуйте ще раз!')
        }
    } while (promptNumber);
    for (const number of numbers) {
        total += number
    }
    console.log(`Cума чисел дорівнює ${total}`);
}
arrayOfNumbers()

// Завдання 7 — додаткове, виконувати не обов'язково
// Є масив logins з логінами користувачів. Напиши скрипт додавання
// логіна в масив logins. Логін, який додається повинен:

// проходити перевірку на довжину від 4 до 16-ти символів включно

// бути унікальним, тобто бути відсутнім в масиві logins

const logins = ['Mango', 'Ajax', 'Kiwi'];
function addLogin(lotOfLogins, login) {
    if (16 < login.length < 4) {
        console.log("Помилка! Логін повинен бути від 4 до 16 символів!");
        return;
    };
    for (const lotOfLogin of lotOfLogins) {
        if (lotOfLogin === login) {
            console.log("Такий логін уже використовується!");
            return;
        };
    };
    logins.push(login);
    console.log(logins);
}
addLogin(logins, 'Kii');