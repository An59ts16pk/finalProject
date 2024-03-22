"use strict";

const articles = [
    {
        id: "ad_0",
        src: "img/articles/speedlift320.jpg",
        title: "1. В России создали первые скоростные лифты",
        text: "В Копейске, завод «Витчел» выпустил первые в России высокоскоростные лифты",
    },
    {
        id: "ad_1",
        src: "img/articles/vaccumelevator320.jpg",
        title: "2. Вакуумный лифт - будущее вертикального транспорта уже здесь",
        text: "Вакуумный лифт – это новый вид транспорта, который использует вакуум для перемещения",
    },
    {
        id: "ad_2",
        src: "img/articles/wee320.jpg",
        title: "3. World Elevator & Escalator Expo 202",
        text: "WEE Expo - это крупнейшая международная выставка лифтов и эскалаторов",
    },
    {
        id: "ad_3",
        src: "img/articles/zastr320.jpg",
        title: "4. Что делать если застряли в лифте?",
        text: "Застрять в лифте - не самая приятная ситуация",
    },
    {
        id: "ad_4",
        src: "img/articles/moderniz320.jpg",
        title: "5. Важность своевременной модернизации лифта",
        text: "Строгий режим эксплуатации, ежедневная загрузка и непредвиденные неполадки",
    },
    {
        id: "ad_5",
        src: "img/articles/prezentab320.jpg",
        title: "6. Презентабельный лифт: источник гордости и символ стиля хозяина",
        text: "В современном мире, отделка и дизайн интерьера играют не менее важную роль",
    },
    {
        id: "ad_6",
        src: "img/articles/ideal320.jpg",
        title: "7. Выбирайте идеальный лифт для вашего здания:",
        text: "7 факторов, которые необходимо учитывать!",
    },
    {
        id: "ad_7",
        src: "img/articles/oldhome320.jpg",
        title: "8. Установка лифта в старом здании",
        text: "Как избежать пробоем и обеспечить безопасность",
    },
    {
        id: "ad_8",
        src: "img/articles/silence320.jpg",
        title: "9. Тишина и комфорт.",
        text: "Как современные технологии помогают снизить шум в лифтах",
    },
    {
        id: "ad_9",
        src: "img/articles/scale320.jpg",
        title: "10. Как интеллектуальные лифты изменяют будущее вертикальной мобильности",
        text: "Интеллектуальные лифты: особенности работы и эксплуатации",
    },
    {
        id: "ad_10",
        src: "img/articles/scale1Eval320.jpg",
        title: "11. Эволюция вертикальной транспортировки. Часть 1",
        text: "Если лифта бы не было, то людям пришлось бы его придумать!",
    },
    {
        id: "ad_11",
        src: "img/articles/scale2Eval320.jpg",
        title: "12. Эволюция вертикальной транспортировки. Часть 2",
        text: "В 17-м веке лифты стали предметом роскоши и развлечения среди знатных особ.",
    },
];

// начальные индексы и начальная установка
const cardA1_El = document.querySelector("#cardA1");
const cardA2_El = document.querySelector("#cardA2");
const cardA3_El = document.querySelector("#cardA3");

let firstIndex = cardA1_El.textContent - 1;
let secondIndex = cardA2_El.textContent - 1;
let thirdIndex = cardA3_El.textContent - 1;

// ----------------------------------------------
//localStorage.clear();
//localStorage.removeItem("LiftComplexArticl");
// ----------------------------------------------

const imageA1_El = document.querySelector("#a_img1");
imageA1_El.src = articles[firstIndex].src;
const imageA2_El = document.querySelector("#a_img2");
imageA2_El.src = articles[secondIndex].src;
const imageA3_El = document.querySelector("#a_img3");
imageA3_El.src = articles[thirdIndex].src;

const titleA1_El = document.querySelector("#a_ttl1");
titleA1_El.textContent = articles[firstIndex].title;
const titleA2_El = document.querySelector("#a_ttl2");
titleA2_El.textContent = articles[secondIndex].title;
const titleA3_El = document.querySelector("#a_ttl3");
titleA3_El.textContent = articles[thirdIndex].title;

const textA1_El = document.querySelector("#a_txt1");
textA1_El.textContent = articles[firstIndex].text;
const textA2_El = document.querySelector("#a_txt2");
textA2_El.textContent = articles[secondIndex].text;
const textA3_El = document.querySelector("#a_txt3");
textA3_El.textContent = articles[thirdIndex].text;

const linkA1_El = document.querySelector("#ad_0");
linkA1_El.id = articles[firstIndex].id;
const linkA2_El = document.querySelector("#ad_1");
linkA2_El.id = articles[secondIndex].id;
const linkA3_El = document.querySelector("#ad_2");
linkA3_El.id = articles[thirdIndex].id;

linkA1_El.addEventListener("click", () => {
    localStorage.setItem("LiftComplexArticl", linkA1_El.id.slice(3));
    //window.location.href = "articlesdetails.html";
});

linkA2_El.addEventListener("click", () => {
    localStorage.setItem("LiftComplexArticl", linkA2_El.id.slice(3));
    //window.location.href = "articlesdetails.html";
});

linkA3_El.addEventListener("click", () => {
    localStorage.setItem("LiftComplexArticl", linkA3_El.id.slice(3));
    //window.location.href = "articlesdetails.html";
});

// Обработчики на кнопки
const nextButtonA = document.querySelector("#nextA");
nextButtonA.addEventListener("click", () => {
    firstIndex++;
    secondIndex++;
    thirdIndex++;

    if (secondIndex == 12) {
        secondIndex = 0;
        thirdIndex = 1;
    }

    if (thirdIndex == 12) {
        thirdIndex = 0;
    }

    if (firstIndex >= articles.length) {
        firstIndex = 0;
        secondIndex = 1;
        thirdIndex = 2;
    }

    imageA1_El.src = articles[firstIndex].src;
    titleA1_El.textContent = articles[firstIndex].title;
    textA1_El.textContent = articles[firstIndex].text;

    imageA2_El.src = articles[secondIndex].src;
    titleA2_El.textContent = articles[secondIndex].title;
    textA2_El.textContent = articles[secondIndex].text;

    imageA3_El.src = articles[thirdIndex].src;
    titleA3_El.textContent = articles[thirdIndex].title;
    textA3_El.textContent = articles[thirdIndex].text;

    cardA1_El.textContent = firstIndex + 1;
    cardA2_El.textContent = secondIndex + 1;
    cardA3_El.textContent = thirdIndex + 1;

    linkA1_El.id = articles[firstIndex].id;
    linkA2_El.id = articles[secondIndex].id;
    linkA3_El.id = articles[thirdIndex].id;
});

const previousButtonA = document.querySelector("#previousA");
previousButtonA.addEventListener("click", () => {
    firstIndex--;
    secondIndex--;
    thirdIndex--;

    if (firstIndex < 0) {
        firstIndex = articles.length - 1;
        secondIndex = 0;
        thirdIndex = 1;
    }

    if (secondIndex < 0) {
        secondIndex = 11;
    }

    if (thirdIndex < 0) {
        thirdIndex = 11;
    }

    imageA1_El.src = articles[firstIndex].src;
    titleA1_El.textContent = articles[firstIndex].title;
    textA1_El.textContent = articles[firstIndex].text;

    imageA2_El.src = articles[secondIndex].src;
    titleA2_El.textContent = articles[secondIndex].title;
    textA2_El.textContent = articles[secondIndex].text;

    imageA3_El.src = articles[thirdIndex].src;
    titleA3_El.textContent = articles[thirdIndex].title;
    textA3_El.textContent = articles[thirdIndex].text;

    cardA1_El.textContent = firstIndex + 1;
    cardA2_El.textContent = secondIndex + 1;
    cardA3_El.textContent = thirdIndex + 1;

    linkA1_El.id = articles[firstIndex].id;
    linkA2_El.id = articles[secondIndex].id;
    linkA3_El.id = articles[thirdIndex].id;
});
