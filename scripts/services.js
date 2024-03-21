"use strict";

const serv = [
    {
        id: "sd_0",
        src: "img/services/project01.jpg",
        titleCard: "ПРОЕКТИРОВАНИЕ",
        textCard: "С 2007 года нами разработано более 400 проектов",
    },
    {
        id: "sd_1",
        src: "img/services/delyvery02.jpg",
        titleCard: "ПОСТАВКА",
        textCard:
            "Успешно сотрудничает с производителями лифтов из разных стран",
    },
    {
        id: "sd_2",
        src: "img/services/montaj03.jpg",
        titleCard: "МОНТАЖ",
        textCard: "Гарантируем самые минимальные сроки выполнения работ",
    },
    {
        id: "sd_3",
        src: "img/services/zamena04.jpg",
        titleCard: "ЗАМЕНА",
        textCard: "Индивидуальный подход к каждому клиенту",
    },
    {
        id: "sd_4",
        src: "img/services/sevice05.jpg",
        titleCard: "ОБСЛУЖИВАНИЕ",
        textCard: "Цена на техническое обслуживание ниже средней по рынку",
    },
    {
        id: "sd_5",
        src: "img/services/modernization06.jpg",
        titleCard: "МОДЕРНИЗАЦИЯ",
        textCard: "Индивидуальный подход к каждому клиенту",
    },
];

// начальные индексы и начальная установка
let firstIndex = 0;
let secondIndex = 1;

const image1El = document.querySelector("#s_img1");
image1El.src = serv[firstIndex].src;
const image2El = document.querySelector("#s_img2");
image2El.src = serv[secondIndex].src;

const title1El = document.querySelector("#s_ttl1");
title1El.textContent = serv[firstIndex].titleCard;
const title2El = document.querySelector("#s_ttl2");
title2El.textContent = serv[secondIndex].titleCard;

const text1El = document.querySelector("#s_txt1");
text1El.textContent = serv[firstIndex].textCard;
const text2El = document.querySelector("#s_txt2");
text2El.textContent = serv[secondIndex].textCard;

const link1_El = document.querySelector("#sd_0");
link1_El.id = serv[firstIndex].id;
const link2_El = document.querySelector("#sd_1");
link2_El.id = serv[secondIndex].id;

link1_El.addEventListener("click", () => {
    //localStorage.removeItem("LiftComplexServ");
    localStorage.setItem("LiftComplexServ", link1_El.id.slice(-1));
    //window.location.href = "servicesdetails.html";
});

link2_El.addEventListener("click", () => {
    //localStorage.removeItem("LiftComplexServ");
    localStorage.setItem("LiftComplexServ", link2_El.id.slice(-1));
    //window.location.href = "servicesdetails.html";
});

// список круглых кнопок пагинации
const paginationCircles = [];
const paginationEl = document.querySelector(".services__pagination");

// создание пагинации
addPagination();

// Обработчики изображений на кнопки
const nextButtonS = document.querySelector("#nextS");
nextButtonS.addEventListener("click", () => {
    firstIndex = indexActivePaginationCircle();
    paginationCircles.forEach((circle) => {
        circle.classList.remove("active");
    });

    firstIndex++;
    secondIndex++;

    if (secondIndex == 6) {
        secondIndex = 0;
    }

    if (firstIndex >= serv.length) {
        firstIndex = 0;
        secondIndex = 1;
    }

    image1El.src = serv[firstIndex].src;
    title1El.textContent = serv[firstIndex].titleCard;
    text1El.textContent = serv[firstIndex].textCard;

    image2El.src = serv[secondIndex].src;
    title2El.textContent = serv[secondIndex].titleCard;
    text2El.textContent = serv[secondIndex].textCard;

    link1_El.id = serv[firstIndex].id;
    link2_El.id = serv[secondIndex].id;

    paginationCircles[firstIndex].classList.add("active");
});

const previousButtonS = document.querySelector("#previousS");
previousButtonS.addEventListener("click", () => {
    firstIndex = indexActivePaginationCircle();
    paginationCircles.forEach((circle) => {
        circle.classList.remove("active");
    });

    firstIndex--;
    secondIndex--;

    if (firstIndex < 0) {
        firstIndex = serv.length - 1;
        secondIndex = 0;
    }

    if (secondIndex < 0) {
        secondIndex = 5;
    }

    image1El.src = serv[firstIndex].src;
    title1El.textContent = serv[firstIndex].titleCard;
    text1El.textContent = serv[firstIndex].textCard;

    image2El.src = serv[secondIndex].src;
    title2El.textContent = serv[secondIndex].titleCard;
    text2El.textContent = serv[secondIndex].textCard;

    link1_El.id = serv[firstIndex].id;
    link2_El.id = serv[secondIndex].id;

    paginationCircles[firstIndex].classList.add("active");
});

// выбор кнопки пагинации
changePaginationCircle();

// ---------------------------------------------------------
function createPaginationCircle() {
    const divEl = document.createElement("div");
    divEl.className = "services__pagination__circle";
    paginationEl.appendChild(divEl);
    paginationCircles.push(divEl);
}

function addPagination() {
    serv.forEach(createPaginationCircle);
    paginationCircles[firstIndex].classList.add("active");
}

function changePaginationCircle() {
    const paginationCirclesEl = document.querySelectorAll(
        ".services__pagination__circle"
    );
    for (let i = 0; i < paginationCirclesEl.length; i++) {
        paginationCirclesEl[i].addEventListener("click", () => {
            firstIndex = i;
            secondIndex = i + 1;

            if (secondIndex == 6) {
                secondIndex = 0;
            }

            image1El.src = serv[firstIndex].src;
            title1El.textContent = serv[firstIndex].titleCard;
            text1El.textContent = serv[firstIndex].textCard;

            image2El.src = serv[secondIndex].src;
            title2El.textContent = serv[secondIndex].titleCard;
            text2El.textContent = serv[secondIndex].textCard;

            link1_El.id = serv[firstIndex].id;
            link2_El.id = serv[secondIndex].id;

            paginationCircles.forEach((circle) => {
                circle.classList.remove("active");
            });
            paginationCircles[i].classList.add("active");
        });
    }
}

function indexActivePaginationCircle() {
    for (let i = 0; i < paginationCircles.length; i++) {
        if (paginationCircles[i].classList.contains("active")) return i;
    }
}
