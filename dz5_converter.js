function converter(unitOfMeasure, value) {
    let convertedValue;
    switch (unitOfMeasure) {
        case "км":
            convertedValue = value * 1000;
            return `${value} км це ${convertedValue} метрів`;
        case "кг":
            convertedValue = value * 1000;
            return `${value} кг це ${convertedValue} грам`;
        case "год":
            convertedValue = value * 60;
            return `${value} год це ${convertedValue} хвилин`;
        default:
            return "Конвертер не знає що за одиниця виміру";
    }
}

let unitOfMeasure = "год"; // prompt("Введіть одиницю для виміру: км, год або кг");
let value = "3";          // parseFloat(prompt("Введіть значення"));

let result = converter(unitOfMeasure, value);
console.log(result);