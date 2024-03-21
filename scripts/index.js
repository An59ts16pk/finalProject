"use strict";

// массив url изображений
const imagesUrls = [
    "img/pr/01.jpg",
    "img/pr/02.jpg",
    "img/pr/03.jpg",
    "img/pr/04.jpg",
    "img/pr/05.jpg",
    "img/pr/06.jpg",
    "img/pr/07.jpg",
    "img/pr/08.jpg",
    "img/pr/09.jpg",
    "img/pr/10.jpg",
    "img/pr/11.jpg",
    "img/pr/12.jpg",
    "img/pr/13.jpg",
    "img/pr/14.jpg",
    "img/pr/15.jpg",
    "img/pr/16.jpg",
    "img/pr/17.jpg",
    "img/pr/18.jpg",
];

const description = [
    "Авиамоторная станция московского метрополитена. Смонтированно 4 лифта",
    "Электрозаводская станция московского метрополитена. Смонтированно 2 лифта",
    "Гиги Каууди. Смонтированно 7 лифтов",
    "Косино станция московского метрополитена. Смонтированно 3 лифта",
    "Лефортово станция московского метрополитена. Смонтированно 3 лифта",
    "Лухмановская станция московского метрополитена.Смонтированно 3 лифта",
    "Мичуринский проспект станция московского метрополитена. Смонтированно 4 лифта",
    "Народное ополчение станция московского метрополитена. Смонтированно 5 лифтов",
    "Некрасовка станция московского метрополитена. Смонтированно 5 лифтов",
    "Нижегородская станция московского метрополитена. Смонтированно 5 лифтов",
    "Окружная станция московского мметрополитена. Смонтированно 2 лифта",
    "Окская станция московского метрополитена. Смонтированно 3 лифта",
    "Полежаевская станция московского метрополитена. Смонтированно 3 лифта",
    "Проспекст Вернадского станция московского метрополитена. Смонтированно 5 лифтов",
    "Терехово станция московского метрополитена. Смонтированно 4 лифта, 3 эскалатора",
    "ТПУ Ходынское поле. Смонтированно 5 лифтов",
    "ТПУ Нижегородская. Смонтированно 9 лифтов",
    "Улица Дмитриевского станция московского метрополитена. Смонтированно 3 лифта",
];

// индекс начальной картинки и её установка в слайдер
let currentIndex = 3;
const imageEl = document.querySelector("#image");
imageEl.src = imagesUrls[currentIndex];
const descriptionEl = document.querySelector("#imgh4");
descriptionEl.textContent = description[currentIndex];

// список круглых кнопок пагинации
const paginationCircles = [];
const paginationEl = document.querySelector(".projects__pagination");

// создание пагинации
addPagination();

// Обработчики изображений на кнопки
const nextButton = document.querySelector("#next");
nextButton.addEventListener("click", () => {
    currentIndex = indexActivePaginationCircle();
    paginationCircles.forEach((circle) => {
        circle.classList.remove("active");
    });

    currentIndex++;

    if (currentIndex >= imagesUrls.length) {
        currentIndex = 0;
    }
    imageEl.src = imagesUrls[currentIndex];

    paginationCircles[currentIndex].classList.add("active");
    descriptionEl.textContent = description[currentIndex];
});

const previousButton = document.querySelector("#previous");
previousButton.addEventListener("click", () => {
    currentIndex = indexActivePaginationCircle();
    paginationCircles.forEach((circle) => {
        circle.classList.remove("active");
    });

    currentIndex--;

    if (currentIndex < 0) {
        currentIndex = imagesUrls.length - 1;
    }
    imageEl.src = imagesUrls[currentIndex];

    paginationCircles[currentIndex].classList.add("active");
    descriptionEl.textContent = description[currentIndex];
});

// выбор кнопки пагинации
changePaginationCircle();

// ---------------------------------------------------------
function createPaginationCircle() {
    const divEl = document.createElement("div");
    divEl.className = "projects__pagination__circle";
    paginationEl.appendChild(divEl);
    paginationCircles.push(divEl);
}

function addPagination() {
    imagesUrls.forEach(createPaginationCircle);
    paginationCircles[currentIndex].classList.add("active");
}

function changePaginationCircle() {
    const paginationCirclesEl = document.querySelectorAll(
        ".projects__pagination__circle"
    );
    for (let i = 0; i < paginationCirclesEl.length; i++) {
        paginationCirclesEl[i].addEventListener("click", () => {
            imageEl.src = imagesUrls[i];
            paginationCircles.forEach((circle) => {
                circle.classList.remove("active");
            });
            paginationCircles[i].classList.add("active");
            descriptionEl.textContent = description[i];
        });
    }
}

function indexActivePaginationCircle() {
    for (let i = 0; i < paginationCircles.length; i++) {
        if (paginationCircles[i].classList.contains("active")) return i;
    }
}
