const ratings = document.querySelectorAll(".rating li");
const sumbit = document.getElementById("submit");
const selection = document.getElementById("rating");
const main = document.querySelector(".main");
const thankyou = document.querySelector(".thank-you");

let rating = null;

ratings.forEach((ratingsSelector) => {
    ratingsSelector.addEventListener("click", handleChecked);
});

sumbit.addEventListener("click", handleSubmit);

function handleChecked() {
    const active = document.querySelector(".checked");

    if (active) {
        active.classList.remove("checked");
    }

    const item = event.target;
    item.classList.add("checked");
    rating = item.innerHTML;
}

function handleSubmit() {
    if (rating) {
        selection.innerHTML = rating;
        main.classList.add("hidden");
        thankyou.classList.remove("hidden");
    }
}