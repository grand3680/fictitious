/* все переменные */
/* Все вопросы и варианты овтеты к ним */
let answer_button = document.getElementsByClassName("answer_button");
let buttons_answers = document.getElementsByClassName("buttons_answers");
let question__title = document.getElementById("__question__title__");
const Fictions = document.getElementById("Fictions");

/* результат */
let question = document.getElementById("question_1");
let result = document.getElementById("result");
let result_txt = document.getElementById("result_txt");

/* Счётчики */
let count = 0;
let count_correct_anwer = 0;
const questions = 10;

/* список всех вариантов ответа */
const list_answer = [
    ["5", "3", "1", "2"],
    ["a * a", "a : a", "a + a", "a - a"],
    ["2", "5", "6", "5.1"],
    ["это 1 треть от числа", "Это матиматика", "Это дясетичная дробь", "это арбуз"],
    ["10 в степени 2", "10000 поделить на 10", "10 : 10", "0 * 100"],
    ["-10", "10", "20", "-20"],
    ["Сотая часть числа это дробь", "процент это сотая часть числа", "процент это скидка в магазине", "Процент это процент"],
    [
        "в дроби верхняя часть это знаменатель а нижняя числитель",
        "Десятичная дробь это способ представления действительных чисел",
        "Арифметическим квадратным корнем из числа а называют неотрицательное число квадрат которого равен а",
        "Квадратный коорень из числа a это число x, дающее a при возведении в квадрат"
    ],

    ["10 в 6 степени", "10 в 4 степени", "100 в 6 степени", "100 тысячь"],
    ["3.14.....", "2.14.....", "4.14.....", "1.14...."]
];
/* список всех правильных вопросов */
const list_correct_answer = [
    "5", "a * a", "это 1 треть от числа",
    "10 в степени 2", "3.14.....", "-20",
    "процент это сотая часть числа",
    "в дроби верхняя часть это знаменатель а нижняя числитель",
    "10 в 6 степени"
];


/* список всех вопросов */
const list_question__title = [
    ["сколько будет 3 + 2"],
    ["A в 2 степени"],
    ["корень из 25"],
    ["1/3 это"],
    ["100 это как"],
    ["сколько будет -10 - 10"],
    ["Выберете верное утверждение"],
    ["Выберете не верное утверждение"],
    ["и самый лёгкий вопрос сколько будет 1000 * 1000"],
    ["число П равно ( мы все знаем что оно бесконечное достаточно нам знать 2 цифры после запятой )"]
];


/* показывает результат */
function rusult() {
    question.style.display = "none";
    result_txt.append(count_correct_anwer + " из 10");
    result.style.display = "block";
}


/* следуйщий вопрос */
function next_question() {
    /* проверка */
    if (count == questions) {
        rusult();
    }

    /* цикл каторый из списка призначает значение кнопкам */
    for (let i = 0; i < 4; i++) {
        /* призначает варианты ответов из списка */
        answer_button[i].textContent = list_answer[count][i];

        /* призначает вопросы из списка */
        question__title.textContent = list_question__title[count][0];

        /* задаёт атриюут value с их значениями, 
           для того чтоб можно было бы проверить в проверке */
        buttons_answers[i].setAttribute('value', list_answer[count][i])
        answer_button[i].setAttribute('value', list_answer[count][i])
    }
    count++;
}

/* проверка ( значение e по умолчанию говорит нам на что нажали) */
Fictions.addEventListener("click", function(e) {
    /* проверяем нажали ли мы на p или на кнопку 
       ( или нужно для того если бы нажали на текст но не на кнопку и чтоб он засчитал */
    if ((e.target.nodeName.toLowerCase() == "p") || (e.target.nodeName.toLowerCase() == "button")) {
        /* Бёрём значение по атрибуту value */
        let word = e.target.getAttribute("value");
        console.log(word);
        if (list_correct_answer.includes(word) == true) {
            count_correct_anwer++;
            next_question();
        } else {
            next_question();
        }
    }
});



next_question();