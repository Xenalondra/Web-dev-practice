const name = document.getElementById("name");
const age = document.getElementById("age");
const dogYears = document.getElementById("dogyears");

name.innerText = "Alondra";
age.innerText = 24;

function computeDogYears(age) {
    dogYears.innerText = Number(age) * 7;
    return Number(age) * 7;
}

dogYears.innerText = computeDogYears(age.innerText);

//fake-input to real-input
//this will select all elements with class = "fake-input"
const fakeInputs = document.querySelectorAll(".fake-input");
fakeInputs.forEach(node => {
    node.classList.add("real-input");
    node.classList.remove("fake-input");
});