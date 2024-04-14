/*
Напишіть регулярний вираз, який допоможе знайти принаймні шість символів і не містити літери А (великої або малої)

Умови виконання ДЗ

Не використовувати функції або інші матеріали які ми не вивчали
Намагайтесь робити ДЗ самостійно та не дивитися будьякі підказки
*/

const regex = /^[^Aa]{6,}$/;

function testRegex(str) {
    return regex.test(str);
}

// Тести
const tests = [
    "Bcde123",  
    "Aa5678",
    "Bcd789",  
    "Abcdefg",  
    "Bcd",      
    "ZzXxYy"
];

tests.forEach((test, index) => {
    console.log(`Test ${index + 1}: ${test} -> ${testRegex(test)}`);
});


/*
В нас є масив обєктів в яких міститься email.

var arr = [
    {
        userName:"Test",
        lastName:"Test",
        email:"test.test@gmail.com"
    },
    {
        userName:"Dmitro",
        lastName:"Porohov",
        email:"dmitro.porohov@yahoo.com"
    },
    {
        userName:"Andrii",
        lastName:"",
        email:"andrii@mail.ru" // Нам такі не підходять
    },
];
У нас параноя, ми не довіряємо жодним адресам, окрім зареєстрованих на доменах gmail.com та yahoo.com.

За допомогою регулярного виразу створіть масив з адресами, гідними довіри. Постарайтеся також зробити просту валідацію до @

- одне, або два слова які можуть містити (латинські букви, цифри) яке може бути розділене крапкою.
*/


var arr = [
    {
        userName:"Test",
        lastName:"Test",
        email:"test.test@gmail.com"
    },
    {
        userName:"Dmitro",
        lastName:"Porohov",
        email:"dmitro.porohov@yahoo.com"
    },
    {
        userName:"Andrii",
        lastName:"",
        email:"andrii@mail.ru" // Нам такі не підходять
    },
];

var emailRegex = /^[a-zA-Z0-9]+([._]?[a-zA-Z0-9]+)*@[a-zA-Z0-9-]+(\.[a-zA-Z]{2,})+$/;

var trustedEmails = arr.filter(function(obj) {
    return emailRegex.test(obj.email) && (obj.email.endsWith('@gmail.com') || obj.email.endsWith('@yahoo.com'));
});

console.log(trustedEmails);