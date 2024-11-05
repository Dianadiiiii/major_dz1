/* Объявление переменных */
let result;
let check;

function verify() {
    console.log("a, b, c, r, m");
/* Каждая строка получает значение из текстового поля с указанным идентификатором и преобразует его в число с плавающей запятой */
    let a = parseFloat(document.getElementById("a").value);
    let h = parseFloat(document.getElementById("h").value);
    let r = parseFloat(document.getElementById("r").value);
    let m = parseFloat(document.getElementById("m").value);

    const volumeCube = a ** 3; /*объем куба*/
    const volumeCylinder = Math.PI * (r ** 2) * h; /* объем цилиндра */

    /* проверка на заполненность*/
    const canFillCube = m <= volumeCube;
    const canFillCylinder = m <= volumeCylinder;
    const canFillBoth = m <= (volumeCube + volumeCylinder);

    if (canFillCube && canFillCylinder && canFillBoth) {
        result = "Можно заполнить кубическую ёмкость, цилиндрическую ёмкость и обе емкости";
        check = true;
    } else if (canFillCube && canFillBoth) {
        result = "Нельзя заполнить цилиндрическую ёмкость.";
        check = false;
    } else if (canFillCylinder && canFillBoth) {
        result = "Нельзя заполнить кубическую ёмкость.";
        check = false;
    } else if (canFillCube && canFillCylinder) {
        result = "Нельзя заполнить обе ёмкости сразу.";
        check = false;
    } else if (!canFillCube && !canFillCylinder && !canFillBoth) {
        result = "Нельзя заполнить ни одну из емкостей.";
        check = false;
    } else {
        result = "Вводимые данные некорректны.";
        check = false;
    }
    /* Результат выводится в элементе с идентификатором result */
    document.getElementById("result").value = result;

    // Теперь установим результат в качестве значения поля 'q' для передачи
    document.getElementById("searchQuery").value = result;
}

function send() {
    if (check) {
        // если check истинно, отправляется форма
        document.getElementById("UserEnter").submit();
    } else {
        alert("Есть недостатки. Повторите ввод");
    }
}

// Эти строки устанавливают обработчики событий для кнопок с идентификаторами verify и send,
//чтобы вызывать соответствующие функции при нажатии.
document.getElementById("verify").addEventListener('click', verify);
document.getElementById("send").addEventListener('click', send);
