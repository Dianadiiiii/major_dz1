let result;
let check;

function verify() {
    console.log("a, b, c, r, m");

    let a = parseFloat(document.getElementById("a").value);
    let h = parseFloat(document.getElementById("h").value);
    let r = parseFloat(document.getElementById("r").value);
    let m = parseFloat(document.getElementById("m").value);

    const volumeCube = a ** 3;
    const volumeCylinder = Math.PI * (r ** 2) * h;

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

    document.getElementById("result").value = result;

    // Теперь установим результат в качестве значения поля 'q' для передачи
    document.getElementById("searchQuery").value = result;
}

function send() {
    if (check) {
        // Добавление дополнительных параметров для отправки
        document.getElementById("UserEnter").submit();
    } else {
        alert("Есть недостатки. Повторите ввод");
    }
}

// Установка обработчиков событий
document.getElementById("verify").addEventListener('click', verify);
document.getElementById("send").addEventListener('click', send);
