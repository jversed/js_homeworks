/*
ДЗ1 Тусувати масив 
Ми знаємо як відсортувати масив. А ось спробуйте його перемішати!

Приклад масиву: arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]; 

Напишіть функцію myBlend(arr), яка перемішуватиме переданий їй масив. Зверніть увагу: не створювати новий масив, вже перемішаний, а саме перемішувати той, який їй передали.
*/

function myBlend(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
}

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log("Дано:", arr);
const blendedArr = myBlend(arr);
console.log("Перемішаний масив:", blendedArr);

console.log("------------------------------------------------------");
/*
ДЗ2 BigBoss
Уявімо собі, що ми є власниками великої компанії, яка розробляє платформу для продажу квитків. 
Окрім того, наша компанія продає рішення для організації продажу цих квитків. Таким чином, у нас будуть клієнти, які придбають наше програмне забезпечення (ПО). 
По суті, ці клієнти будуть подібні до "дочірніх компаній" (subCompany), які вже використовують наше ПО для продажу квитків. Крім цього, ці "дочірні компанії" також можуть стати постачальниками цього рішення, 
і в цьому випадку вони вже будуть "внучатами компанії" (subSubCompany), і так далі і далі
Ось приклад об'єкту, зверніть увагу на вкладеність, та маєте на увазі що об'єкт може ставати ще глибшим. 
--
Вам необхідно написати функцію findValueByKey(companyName), яка буде приймати значення у вигляді companyName та надавати інформацію про цю subCompany.
*/

const company = {
    name: 'Велика Компанія',
    type:'Головна компанія',
    platform: 'Платформа для продажу квитків',
    sellsSolution: 'Рішення для продажу квитків',
    clients: [
        {
            name: 'Клієнт 1',
            type: 'subCompany',
            uses: 'ПО для продажу квитків',
            sells: 'Рішення для продажу квитків',
            partners: [
                {
                    name: 'Клієнт 1.1',
                    type: 'subSubCompany',
                    uses: 'Рішення для продажу квитків',
                    sells: 'Рішення для продажу квитків',
                },
                {
                    name: 'Клієнт 1.2',
                    type: 'subSubCompany',
                    uses: 'Рішення для продажу квитків',
                    sells: 'Рішення для продажу квитків',
                    partners: [
                        {
                            name: 'Клієнт 1.2.3',
                            type: 'subSubCompany',
                            uses: 'Рішення для продажу квитків',
                            sells: 'Рішення для продажу квитків',
                        }
                    ]
                }
            ]
        },
        {
            name: 'Клієнт 2',
            type: 'subCompany',
            uses: 'ПО для продажу квитків',
            sells: 'Рішення для продажу квитків'
        }
    ]
};

function findValueByKey(companyName, company) {
    if (company.name === companyName) {
        return company;
    }
    
    // Перевіряємо чи є підкомпанії
    if (company.clients) {
        // Проходимося по кожному клієнту
        for (let client of company.clients) {
            // викликаємо функцію для кожного клієнта (підкомпанії)
            const result = findValueByKey(companyName, client);
            if (result) {
                return result;
            }
        }
    }
    
    // не знайшли -> перевіряємо partners
    if (company.partners) {
        // проходимося по кожному партнеру
        for (let partner of company.partners) {
            const result = findValueByKey(companyName, partner);
            if (result) {
                return result;
            }
        }
    }
    
    //  null якщо не знайшли
    return null;
}

const companyName = 'Клієнт 1.2.3';
const result = findValueByKey(companyName, company);
console.log(result);