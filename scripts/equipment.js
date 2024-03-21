"use strict";

const equip = [
    {
        id: "ed_0",
        src: "img/equipment/pass01.jpg",
        titleCard: "Пассажирские лифты",
        textCard: "Предлагаем широкий спектр пассажирских лифтов",
    },
    {
        id: "ed_1",
        src: "img/equipment/skor02.jpg",
        titleCard: "Скоростные лифты",
        textCard:
            "Высокоскоростные лифты - это технически очень сложное оборудование",
    },
    {
        id: "ed_2",
        src: "img/equipment/gru03.jpg",
        titleCard: "Грузовые лифты",
        textCard:
            "Данный вид вертикального транспорта широко используется в промышленной сфере",
    },
    {
        id: "ed_3",
        src: "img/equipment/esk04.jpg",
        titleCard: "Эскалаторы",
        textCard:
            "Эскалаторы являются неотъемлемой частью современной инфраструктуры города",
    },
    {
        id: "ed_4",
        src: "img/equipment/hosp05.jpg",
        titleCard: "Больничные лифты",
        textCard:
            "Больничные лифты устанавливаются в социально значимые объекты",
    },
    {
        id: "ed_5",
        src: "img/equipment/aut06.jpg",
        titleCard: "Автомобильные лифты",
        textCard:
            "С увеличением парка автомобилей растёт количество установок таких лифтов",
    },
    {
        id: "ed_6",
        src: "img/equipment/mgr07.jpg",
        titleCard: "Малые грузовые лифты",
        textCard:
            "Малые грузовые лифты - это решение для грузовой нагрузки от 50 до 500 кг",
    },
];

// начальные индексы и начальная установка
let firstIndex = 0;
let secondIndex = 1;

const image1_El = document.querySelector("#e_img1");
image1_El.src = equip[firstIndex].src;
const image2_El = document.querySelector("#e_img2");
image2_El.src = equip[secondIndex].src;

const title1_El = document.querySelector("#e_ttl1");
title1_El.textContent = equip[firstIndex].titleCard;
const title2_El = document.querySelector("#e_ttl2");
title2_El.textContent = equip[secondIndex].titleCard;

const text1_El = document.querySelector("#e_txt1");
text1_El.textContent = equip[firstIndex].textCard;
const text2_El = document.querySelector("#e_txt2");
text2_El.textContent = equip[secondIndex].textCard;

const link1_El = document.querySelector("#ed_0");
link1_El.id = equip[firstIndex].id;
const link2_El = document.querySelector("#ed_1");
link2_El.id = equip[secondIndex].id;

link1_El.addEventListener("click", () => {
    //localStorage.removeItem("LiftComplexEquip");
    localStorage.setItem("LiftComplexEquip", link1_El.id.slice(-1));
    //window.location.href = "equipmentdetails.html";
});

link2_El.addEventListener("click", () => {
    //localStorage.removeItem("LiftComplexEquip");
    localStorage.setItem("LiftComplexEquip", link2_El.id.slice(-1));
    //window.location.href = "equipmentdetails.html";
});

// список круглых кнопок пагинации
const paginationCircles = [];
const paginationEl = document.querySelector(".equipment__paginationE");

// создание пагинации
addPagination();

// Обработчики изображений на кнопки
const nextButtonE = document.querySelector("#nextE");
nextButtonE.addEventListener("click", () => {
    firstIndex = indexActivePaginationCircle();
    paginationCircles.forEach((circle) => {
        circle.classList.remove("active");
    });

    firstIndex++;
    secondIndex++;

    if (secondIndex == 7) {
        secondIndex = 0;
    }

    if (firstIndex >= equip.length) {
        firstIndex = 0;
        secondIndex = 1;
    }

    image1_El.src = equip[firstIndex].src;
    title1_El.textContent = equip[firstIndex].titleCard;
    text1_El.textContent = equip[firstIndex].textCard;

    image2_El.src = equip[secondIndex].src;
    title2_El.textContent = equip[secondIndex].titleCard;
    text2_El.textContent = equip[secondIndex].textCard;

    link1_El.id = equip[firstIndex].id;
    link2_El.id = equip[secondIndex].id;

    paginationCircles[firstIndex].classList.add("active");
});

const previousButtonE = document.querySelector("#previousE");
previousButtonE.addEventListener("click", () => {
    firstIndex = indexActivePaginationCircle();
    paginationCircles.forEach((circle) => {
        circle.classList.remove("active");
    });

    firstIndex--;
    secondIndex--;

    if (firstIndex < 0) {
        firstIndex = equip.length - 1;
        secondIndex = 0;
    }

    if (secondIndex < 0) {
        secondIndex = 6;
    }

    image1_El.src = equip[firstIndex].src;
    title1_El.textContent = equip[firstIndex].titleCard;
    text1_El.textContent = equip[firstIndex].textCard;

    image2_El.src = equip[secondIndex].src;
    title2_El.textContent = equip[secondIndex].titleCard;
    text2_El.textContent = equip[secondIndex].textCard;

    link1_El.id = equip[firstIndex].id;
    link2_El.id = equip[secondIndex].id;

    paginationCircles[firstIndex].classList.add("active");
});

// выбор кнопки пагинации
changePaginationCircle();

// ---------------------------------------------------------
function createPaginationCircle() {
    const divEl = document.createElement("div");
    divEl.className = "equipment__paginationE__circle";
    paginationEl.appendChild(divEl);
    paginationCircles.push(divEl);
}

function addPagination() {
    equip.forEach(createPaginationCircle);
    paginationCircles[firstIndex].classList.add("active");
}

function changePaginationCircle() {
    const paginationCircles = document.querySelectorAll(
        ".equipment__paginationE__circle"
    );
    for (let i = 0; i < paginationCircles.length; i++) {
        paginationCircles[i].addEventListener("click", () => {
            firstIndex = i;
            secondIndex = i + 1;

            if (secondIndex == 7) {
                secondIndex = 0;
            }

            image1_El.src = equip[firstIndex].src;
            title1_El.textContent = equip[firstIndex].titleCard;
            text1_El.textContent = equip[firstIndex].textCard;

            image2_El.src = equip[secondIndex].src;
            title2_El.textContent = equip[secondIndex].titleCard;
            text2_El.textContent = equip[secondIndex].textCard;

            link1_El.id = equip[firstIndex].id;
            link2_El.id = equip[secondIndex].id;

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
