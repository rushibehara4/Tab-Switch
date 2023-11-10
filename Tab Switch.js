let aboutButton = document.getElementById("aboutButton");
let aboutTab = document.getElementById("aboutTab");

let timeToVisitButton = document.getElementById("timeToVisitButton");
let timeToVisitTab = document.getElementById("timeToVisitTab");

let attractionsButton = document.getElementById("attractionsButton");
let attractionsTab = document.getElementById("attractionsTab");

timeToVisitTab.classList.add("d-none");
attractionsTab.classList.add("d-none");

aboutButton.onclick = function() {
    aboutTab.classList.remove("d-none");
    timeToVisitTab.classList.add("d-none");
    attractionsTab.classList.add("d-none");

    aboutButton.classList.add("selected-button");
    attractionsButton.classList.remove("selected-button");
    timeToVisitButton.classList.remove("selected-button");
}

timeToVisitButton.onclick = function() {
    aboutTab.classList.add("d-none");
    timeToVisitTab.classList.remove("d-none");
    attractionsTab.classList.add("d-none");

    aboutButton.classList.remove("selected-button");
    timeToVisitButton.classList.add("selected-button");
    attractionsButton.classList.remove("selected-button");
}

attractionsButton.onclick = function() {
    aboutTab.classList.add("d-none");
    timeToVisitTab.classList.add("d-none");
    attractionsTab.classList.remove("d-none");

    aboutButton.classList.remove("selected-button");
    timeToVisitButton.classList.remove("selected-button");
    attractionsButton.classList.add("selected-button");
}