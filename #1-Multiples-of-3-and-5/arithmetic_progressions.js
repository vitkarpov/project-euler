/* 
 * Создает новый объект для работы с арифметической прогрессией
 * @params {number} d Разность прогрессии	
 */
function Progression (d) {
    this.a1 = d;
    this.d = d;
}
/*
 * Возвращает сумму n первых членов прогрессии
 * @params {number} n Количество первых членов прогрессии
 */
Progression.prototype.getSum = function (n) {
    return (2*this.a1 + (n-1)*this.d)*n/2;
}
/*
 * Возвращает значение n-го член прогрессии
 * @params {number} n Номер нужного члена
 */
Progression.prototype.getMember = function (n) {
    return this.a1 + (n-1)*this.d;
}
/*
 * Возвращает номер члена прогрессии по заданному значению
 * @params {number} an Значение n-го члена прогрессии
 */
Progression.prototype.getNumberOfMemberEquals = function (an) {
    return Math.floor((an - this.a1)/this.d + 1);
}

// Сумма натуральных чисел в диапазоне от 1 до 1000
// которые деляется на 3 и на 5 складывается из
// сумм арифметических прогрессий с разностями 5 и 3,
// за вычетом суммы прогресси с разностью 15.
// 
// Последнее следует из того, что НОК(3,5) = 15,
// таким образом числа кратные 15 складываются дважды.
// Одну из этих сумм нужно вычесть.

function getSumBelow(limit) {
    // прогрессии с разностями 5, 3 и 15 соответственно
    var p5 = new Progression(5);
    var p3 = new Progression(3);
    var p15 = new Progression(15);

    return p5.getSum(p5.getNumberOfMemberEquals(limit)) + p3.getSum(p3.getNumberOfMemberEquals(limit)) - p15.getSum(p15.getNumberOfMemberEquals(limit));
}

module.exports = function() {
    getSumBelow(1000);
}