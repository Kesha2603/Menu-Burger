// Task 1
// classList - shows/gets all classes
// contains - checks classList for specific class
// add - add class
// remove - remove class
// toggle - toggles class
const navToggle = document.querySelector(".nav-toggle");
const links = document.querySelector(".links");
navToggle.addEventListener("click", function () {
    links.classList.toggle("show-links");
});


// Task 2
// Вывести id объектов в том порядке, который соответствует arrayValue. 
// Пояснение: id объектов с arrayValue == 'one' выводятся первыми, с arrayValue === 'four' выводятся последними.

const customObjectsArray = [{
    id: 'a28a27b4-1237-11ed-861d-0242ac120002',
    arrayValue: 'one',
}, {
    id: 'a28a296c-1237-11ed-861d-0242ac120002',
    arrayValue: 'four',
}, {
    id: 'a28a2a52-1237-11ed-861d-0242ac120002',
    arrayValue: 'three',
}, {
    id: 'a28a2b2e-1237-11ed-861d-0242ac120002',
    arrayValue: 'three',
}, {
    id: 'a28a2dae-1237-11ed-861d-0242ac120002',
    arrayValue: 'three',
}, {
    id: 'a28a3132-1237-11ed-861d-0242ac120002',
    arrayValue: 'two',
}, {
    id: 'a28a320e-1237-11ed-861d-0242ac120002',
    arrayValue: 'two',
}
];

const obj = {
    "one": 1,
    "two": 2,
    "three": 3,
    "four": 4,
}

customObjectsArray.sort((a, b) => obj[a.arrayValue] - obj[b.arrayValue]);
customObjectsArray.forEach((item) => console.log(item.id))

