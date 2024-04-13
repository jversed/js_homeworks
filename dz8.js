// Створіть об'єкт з щонайменше трьома властивостями (намагайтесь виявити фантазію). 
//Напишіть метод getInfo(), який виводитиме всі властивості об'єкта у вигляді пар "ключ: значення". 
//Зверніть увагу: метод повинен працювати навіть після додавання нових властивостей до об'єкта. 
// Наприклад так:
// obj.getInfo(); // Правильна інформація про об'єкт
// obj.newProperty = 'Нова властивість!'; // Додали властивість до об'єкта
// obj.getInfo(); // Виводить всі властивості, включаючи щойно додану.

const someObject = {
    name: 'John Package',
    age: 123,
    profession: 'hitman',
    getInfo() {
        for (const key in this) {
            if (typeof this[key] !== 'function') {
                console.log(`${key}: ${this[key]}`);
            }
        }
    }
};
someObject.getInfo();
someObject.someOtherProperty = 'some value';
someObject.getInfo();


console.log("--------------------------------------------------------------------");
/*
ДЗ2 Сума вартості послуг
 Припустимо, у нас є об'єкт. Властивості об'єкта - назва послуги та її вартість:
var services = {
	"стрижка": "60 грн",
	"гоління": "80 грн",
	"Миття голови": "100 грн"
};
"Послуги" можуть додаватися по ходу роботи:
services['Розбити скло'] = "200 грн";
Умови виконання ДЗ
створити метод price(), який обчислює та повертає загальну вартість "наданих послуг".
створити метод minPrice() - який повертає мінімальний price
створити метод maxPrice() - який повертає максимальний price
*/

var services = {
    "стрижка": "60 грн",
    "гоління": "80 грн",
    "Миття голови": "100 грн"
};
services['Розбити скло'] = "200 грн";
services['щось ще зробити'] = "1000 грн";
services['щось ще зробити 2'] = "1 грн";

console.log(services);

services.price = function() {
    var total = 0;
    for (var service in this) {
        if (typeof this[service] === 'string' && !isNaN(parseFloat(this[service]))) {
            total += parseFloat(this[service]);
        }
    }
    return total;
};

services.minPrice = function() {
    var minPrice = Infinity;
    for (var service in this) {
        if (typeof this[service] === 'string' && !isNaN(parseFloat(this[service]))) {
            var price = parseFloat(this[service]);
            if (price < minPrice) {
                minPrice = price;
            }
        }
    }
    return minPrice;
};

services.maxPrice = function() {
    var maxPrice = -Infinity;
    for (var service in this) {
        if (typeof this[service] === 'string' && !isNaN(parseFloat(this[service]))) {
            var price = parseFloat(this[service]);
            if (price > maxPrice) {
                maxPrice = price;
            }
        }
    }
    return maxPrice;
};

console.log("Загальна вартість послуг: " + services.price() + " грн");
console.log("Мінімальна вартість послуги: " + services.minPrice() + " грн");
console.log("Максимальна вартість послуги: " + services.maxPrice() + " грн");